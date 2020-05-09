// Copyright (c) 2014 - 2016 George Kimionis
// See the accompanying file LICENSE for the Software License Aggrement

using System;
using System.Configuration;
using System.Diagnostics;
using BlocknetLib.Auxiliary;
using BlocknetLib.Services.Coins.Base;
using BlocknetLib.Services.Coins.Blocknet;

namespace BlocknetLib.Services
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
                if (!string.IsNullOrWhiteSpace(daemonUrl))
                {
                    DaemonUrl = daemonUrl;
                    UseTestnet = false; //  this will force the CoinParameters.SelectedDaemonUrl dynamic property to automatically pick the daemonUrl defined above
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
								

                #region Blocknet
                else if (coinService is BlocknetService)
                {
                    if (!IgnoreConfigFiles)
                    {
                        DaemonUrl = ConfigurationManager.AppSettings.Get("Block_DaemonUrl");
                        DaemonUrlTestnet = ConfigurationManager.AppSettings.Get("Block_DaemonUrl_Testnet");
                        RpcUsername = ConfigurationManager.AppSettings.Get("Block_RpcUsername");
                        RpcPassword = ConfigurationManager.AppSettings.Get("Block_RpcPassword");
                        WalletPassword = ConfigurationManager.AppSettings.Get("Block_WalletPassword");
                    }
                    CoinShortName = "BLOCK";
                    CoinLongName = "Blocknet Coin";
                    IsoCurrencyCode = "BLOCK";

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

                    BaseUnitName = "block";
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
            public string CoinShortName { get; set; }
            public string CoinLongName { get; set; }
            public decimal CoinsPerBaseUnit { get; set; }
            public string DaemonUrl { private get; set; }
            public string DaemonUrlTestnet { private get; set; }
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
            public string SelectedDaemonUrl => !UseTestnet ? DaemonUrl : DaemonUrlTestnet;
            public ulong TotalCoinSupplyInCoins { get; set; }
            public int TransactionSizeBytesContributedByEachInput { get; set; }
            public int TransactionSizeBytesContributedByEachOutput { get; set; }
            public int TransactionSizeFixedExtraSizeInBytes { get; set; }
            public bool UseTestnet { get; set; }
            public string WalletPassword { get; set; }
        }
    }
}
