FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app
EXPOSE 8089

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /app

# Copy everything else and build
COPY . ./
RUN dotnet publish CoinInfo.Api -c Release -o CoinInfo.Api/out
# Build runtime image

FROM base AS final
COPY --from=build /app/CoinInfo.Api/out .


ENTRYPOINT ["dotnet", "CoinInfo.Api.dll"]