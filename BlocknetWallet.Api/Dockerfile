FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app
EXPOSE 8085

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /app

# Copy everything else and build
COPY . ./
RUN dotnet publish BlocknetWallet.Api -c Release -o BlocknetWallet.Api/out
# Build runtime image

FROM base AS final
COPY --from=build /app/BlocknetWallet.Api/out .


ENTRYPOINT ["dotnet", "BlocknetWallet.Api.dll"]