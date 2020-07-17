// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System;
using System.Configuration;
using System.Diagnostics;
using System.IO;
using CloudChainsSPVLib.Auxiliary;
using CloudChainsSPVLib.CoinConfig;
using CloudChainsSPVLib.Services.Coins.Alqocoin;
using CloudChainsSPVLib.Services.Coins.Base;
using CloudChainsSPVLib.Services.Coins.BitBay;
using CloudChainsSPVLib.Services.Coins.Bitcoin;
using CloudChainsSPVLib.Services.Coins.Blocknet;
using CloudChainsSPVLib.Services.Coins.Dash;
using CloudChainsSPVLib.Services.Coins.Digibyte;
using CloudChainsSPVLib.Services.Coins.Dogecoin;
using CloudChainsSPVLib.Services.Coins.Litecoin;
using CloudChainsSPVLib.Services.Coins.Phore;
using CloudChainsSPVLib.Services.Coins.Pivx;
using CloudChainsSPVLib.Services.Coins.Polis;
using CloudChainsSPVLib.Services.Coins.Ravencoin;
using CloudChainsSPVLib.Services.Coins.Syscoin;
using CloudChainsSPVLib.Services.Coins.TrezarCoin;

using Microsoft.Extensions.Configuration;

namespace CloudChainsSPVLib.Services
{
    public partial class CoinService
    {
        public CoinParameters Parameters { get; }

        public class CoinParameters
        {
            #region Constructor

            public CoinParameters(ICoinService coinService,
                string daemonUrl,
                string rpcUsername,
                string rpcPassword,
                string walletPassword,
                short rpcRequestTimeoutInSeconds)
            {
                var environmentName = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT");
                var builder = new ConfigurationBuilder()
                            .SetBasePath(Directory.GetCurrentDirectory())
                            .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
                            .AddJsonFile($"appsettings.{environmentName}.json", true)
                            .AddEnvironmentVariables();

                IConfiguration configuration = builder.Build();

                var _config = configuration.GetSection("CoinSpvConfig").Get<CoinRpcSPVConfig>();


                if (!string.IsNullOrWhiteSpace(daemonUrl))
                {
                    DaemonUrl = daemonUrl;
                    IgnoreConfigFiles = true;
                    RpcUsername = rpcUsername;
                    RpcPassword = rpcPassword;
                    WalletPassword = walletPassword;
                }

                if (rpcRequestTimeoutInSeconds > 0)
                {
                    RpcRequestTimeoutInSeconds = rpcRequestTimeoutInSeconds;
                }
                else
                {
                    short rpcRequestTimeoutTryParse = 0;

                    if (short.TryParse(ConfigurationManager.AppSettings.Get("RpcRequestTimeoutInSeconds"), out rpcRequestTimeoutTryParse))
                    {
                        RpcRequestTimeoutInSeconds = rpcRequestTimeoutTryParse;
                    }
                }

                if (IgnoreConfigFiles && (string.IsNullOrWhiteSpace(DaemonUrl) || string.IsNullOrWhiteSpace(RpcUsername) || string.IsNullOrWhiteSpace(RpcPassword)))
                {
                    throw new Exception($"One or more required parameters, as defined in {GetType().Name}, were not found in the configuration file!");
                }

                if (IgnoreConfigFiles && Debugger.IsAttached && string.IsNullOrWhiteSpace(WalletPassword))
                {
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    Console.WriteLine("[WARNING] The wallet password is either null or empty");
                    Console.ResetColor();
                }

                #region Bitcoin

                else if (coinService is BitcoinService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Bitcoin.DaemonUrl;
                        RpcUsername = _config.Bitcoin.RpcUserName;
                        RpcPassword = _config.Bitcoin.RpcPassword;
                        WalletPassword = _config.Bitcoin.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Bitcoin.RpcRequestTimeoutInSeconds;
                    }

                    CoinShortName = "BTC";
                    CoinLongName = "Bitcoin";
                    IsoCurrencyCode = "XBT";

                    TransactionSizeBytesContributedByEachInput = 148;
                    TransactionSizeBytesContributedByEachOutput = 34;
                    TransactionSizeFixedExtraSizeInBytes = 10;

                    FreeTransactionMaximumSizeInBytes = 1000;
                    FreeTransactionMinimumOutputAmountInCoins = 0.01M;
                    FreeTransactionMinimumPriority = 57600000;
                    FeePerThousandBytesInCoins = 0.0001M;
                    MinimumTransactionFeeInCoins = 0.0001M;
                    MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    TotalCoinSupplyInCoins = 21000000;
                    EstimatedBlockGenerationTimeInMinutes = 10;
                    BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    BaseUnitName = "Satoshi";
                    BaseUnitsPerCoin = 100000000;
                    CoinsPerBaseUnit = 0.00000001M;
                }

                #endregion

                #region Litecoin

                else if (coinService is LitecoinService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Litecoin.DaemonUrl;
                        RpcUsername = _config.Litecoin.RpcUserName;
                        RpcPassword = _config.Litecoin.RpcPassword;
                        WalletPassword = _config.Litecoin.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Litecoin.RpcRequestTimeoutInSeconds;
                    }

                    CoinShortName = "LTC";
                    CoinLongName = "Litecoin";
                    IsoCurrencyCode = "XLT";

                    TransactionSizeBytesContributedByEachInput = 148;
                    TransactionSizeBytesContributedByEachOutput = 34;
                    TransactionSizeFixedExtraSizeInBytes = 10;

                    FreeTransactionMaximumSizeInBytes = 5000;
                    FreeTransactionMinimumOutputAmountInCoins = 0.001M;
                    FreeTransactionMinimumPriority = 230400000;
                    FeePerThousandBytesInCoins = 0.001M;
                    MinimumTransactionFeeInCoins = 0.001M;
                    MinimumNonDustTransactionAmountInCoins = 0.001M;

                    TotalCoinSupplyInCoins = 84000000;
                    EstimatedBlockGenerationTimeInMinutes = 2.5;
                    BlocksHighestPriorityTransactionsReservedSizeInBytes = 16000;
                    BlockMaximumSizeInBytes = 250000;

                    BaseUnitName = "Litetoshi";
                    BaseUnitsPerCoin = 100000000;
                    CoinsPerBaseUnit = 0.00000001M;
                }

                #endregion

                #region Blocknet
                else if (coinService is BlocknetzService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Blocknet.DaemonUrl;
                        RpcUsername = _config.Blocknet.RpcUserName;
                        RpcPassword = _config.Blocknet.RpcPassword;
                        WalletPassword = _config.Blocknet.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Blocknet.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "BLOCK";
                    CoinLongName = "Blocknet";
                    IsoCurrencyCode = "BLOCK";

                    TransactionSizeBytesContributedByEachInput = 192;
                    TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    MinimumTransactionFeeInCoins = 0.0001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    BaseUnitsPerCoin = 100000000;
                    CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Alqocoin
                else if (coinService is AlqocoinService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Alqocoin.DaemonUrl;
                        RpcUsername = _config.Alqocoin.RpcUserName;
                        RpcPassword = _config.Alqocoin.RpcPassword;
                        WalletPassword = _config.Alqocoin.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Alqocoin.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "XLQ";
                    CoinLongName = "Alqocoin";
                    IsoCurrencyCode = "XLQ";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Bitbay
                else if (coinService is BitbayService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.BitBay.DaemonUrl;
                        RpcUsername = _config.BitBay.RpcUserName;
                        RpcPassword = _config.BitBay.RpcPassword;
                        WalletPassword = _config.BitBay.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.BitBay.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "BAY";
                    CoinLongName = "Bitbay";
                    IsoCurrencyCode = "BAY";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Dash
                else if (coinService is DashService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Dash.DaemonUrl;
                        RpcUsername = _config.Dash.RpcUserName;
                        RpcPassword = _config.Dash.RpcPassword;
                        WalletPassword = _config.Dash.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Dash.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "DASH";
                    CoinLongName = "Dashcoin";
                    IsoCurrencyCode = "DASH";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Digibyte
                else if (coinService is DigibyteService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Digibyte.DaemonUrl;
                        RpcUsername = _config.Digibyte.RpcUserName;
                        RpcPassword = _config.Digibyte.RpcPassword;
                        WalletPassword = _config.Digibyte.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Digibyte.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "DGB";
                    CoinLongName = "Digibyte";
                    IsoCurrencyCode = "DGB";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Dogecoin
                else if (coinService is DogecoinService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Dogecoin.DaemonUrl;
                        RpcUsername = _config.Dogecoin.RpcUserName;
                        RpcPassword = _config.Dogecoin.RpcPassword;
                        WalletPassword = _config.Dogecoin.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Dogecoin.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "DOGE";
                    CoinLongName = "Dogecoin";
                    IsoCurrencyCode = "DOGE";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Phore
                else if (coinService is PhoreService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Phore.DaemonUrl;
                        RpcUsername = _config.Phore.RpcUserName;
                        RpcPassword = _config.Phore.RpcPassword;
                        WalletPassword = _config.Phore.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Phore.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "PHORE";
                    CoinLongName = "Phore";
                    IsoCurrencyCode = "PHORE";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Pivx
                else if (coinService is PivxService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Pivx.DaemonUrl;
                        RpcUsername = _config.Pivx.RpcUserName;
                        RpcPassword = _config.Pivx.RpcPassword;
                        WalletPassword = _config.Pivx.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Pivx.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "PIVX";
                    CoinLongName = "Pivx";
                    IsoCurrencyCode = "PIVX";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Polis
                else if (coinService is PolisService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Polis.DaemonUrl;
                        RpcUsername = _config.Polis.RpcUserName;
                        RpcPassword = _config.Polis.RpcPassword;
                        WalletPassword = _config.Polis.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Polis.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "POLIS";
                    CoinLongName = "Polis";
                    IsoCurrencyCode = "POLIS";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Ravencoin
                else if (coinService is RavencoinService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Ravencoin.DaemonUrl;
                        RpcUsername = _config.Ravencoin.RpcUserName;
                        RpcPassword = _config.Ravencoin.RpcPassword;
                        WalletPassword = _config.Ravencoin.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Ravencoin.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "RVN";
                    CoinLongName = "Ravencoin";
                    IsoCurrencyCode = "RVN";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Syscoin
                else if (coinService is SyscoinService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Syscoin.DaemonUrl;
                        RpcUsername = _config.Syscoin.RpcUserName;
                        RpcPassword = _config.Syscoin.RpcPassword;
                        WalletPassword = _config.Syscoin.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Syscoin.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "SYS";
                    CoinLongName = "Syscoin";
                    IsoCurrencyCode = "SYS";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "Block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Trezarcoin
                else if (coinService is TrezarcoinService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = _config.Trezarcoin.DaemonUrl;
                        RpcUsername = _config.Trezarcoin.RpcUserName;
                        RpcPassword = _config.Trezarcoin.RpcPassword;
                        WalletPassword = _config.Trezarcoin.WalletPassword;
                        RpcRequestTimeoutInSeconds = _config.Trezarcoin.RpcRequestTimeoutInSeconds;
                    }
                    CoinShortName = "TZC";
                    CoinLongName = "TrezarCoin";

                    // TransactionSizeBytesContributedByEachInput = 148;
                    // TransactionSizeBytesContributedByEachOutput = 34;
                    // TransactionSizeFixedExtraSizeInBytes = 10;

                    // FreeTransactionMaximumSizeInBytes = 1000;
                    // FreeTransactionMinimumOutputAmountInCoins = 0.0001M;
                    // FreeTransactionMinimumPriority = 57600000;
                    // FeePerThousandBytesInCoins = 0.0001M;
                    // MinimumTransactionFeeInCoins = 0.001M;
                    // MinimumNonDustTransactionAmountInCoins = 0.0000543M;

                    // TotalCoinSupplyInCoins = 18900000;
                    // EstimatedBlockGenerationTimeInMinutes = 2.7;
                    // BlocksHighestPriorityTransactionsReservedSizeInBytes = 50000;

                    //BaseUnitName = "block";
                    // BaseUnitsPerCoin = 100000000;
                    // CoinsPerBaseUnit = 0.00000001M;
                }
                #endregion

                #region Uknown coin exception

                else
                {
                    throw new Exception("Unknown coin!");
                }
                #endregion

                #region Invalid configuration / Missing parameters

                if (RpcRequestTimeoutInSeconds <= 0)
                {
                    throw new Exception("RpcRequestTimeoutInSeconds must be greater than zero");
                }

                if (string.IsNullOrWhiteSpace(DaemonUrl)
                    || string.IsNullOrWhiteSpace(RpcUsername)
                    || string.IsNullOrWhiteSpace(RpcPassword))
                {
                    throw new Exception($"One or more required parameters, as defined in {GetType().Name}, were not found in the configuration file!");
                }

                #endregion
            }

            #endregion

            public string BaseUnitName { get; set; }
            public uint BaseUnitsPerCoin { get; set; }
            public int BlocksHighestPriorityTransactionsReservedSizeInBytes { get; set; }
            public int BlockMaximumSizeInBytes { get; set; }
            public decimal CoinsPerBaseUnit { get; set; }
            public string CoinShortName { get; set; }
            public string CoinLongName { get; set; }
            public string DaemonUrl { get; set; }            
            public double EstimatedBlockGenerationTimeInMinutes { get; set; }
            public int ExpectedNumberOfBlocksGeneratedPerDay => (int) EstimatedBlockGenerationTimeInMinutes * GlobalConstants.MinutesInADay;
            public decimal FeePerThousandBytesInCoins { get; set; }
            public short FreeTransactionMaximumSizeInBytes { get; set; }
            public decimal FreeTransactionMinimumOutputAmountInCoins { get; set; }
            public int FreeTransactionMinimumPriority { get; set; }
            public bool IgnoreConfigFiles { get; }
            public string IsoCurrencyCode { get; set; }
            public decimal MinimumNonDustTransactionAmountInCoins { get; set; }
            public decimal MinimumTransactionFeeInCoins { get; set; }
            public decimal OneBaseUnitInCoins => CoinsPerBaseUnit;
            public uint OneCoinInBaseUnits => BaseUnitsPerCoin;
            public string RpcPassword { get; set; }
            public short RpcRequestTimeoutInSeconds { get; set; }
            public string RpcUsername { get; set; }
            public ulong TotalCoinSupplyInCoins { get; set; }
            public int TransactionSizeBytesContributedByEachInput { get; set; }
            public int TransactionSizeBytesContributedByEachOutput { get; set; }
            public int TransactionSizeFixedExtraSizeInBytes { get; set; }
            public bool UseTestnet { get; set; }
            public string WalletPassword { get; set; }
        }
    }
}
