FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build-env
WORKDIR /source
# Copy csproj and restore as distinct layers
COPY ./Xrouter.Service.Explorer.sln .
COPY ./Xrouter.Service.Explorer/Xrouter.Service.Explorer.csproj ./Xrouter.Service.Explorer/
RUN dotnet restore
# Setup NodeJs
RUN apt-get update && \
    apt-get install -y wget && \
    apt-get install -y gnupg2 && \
    wget -qO- https://deb.nodesource.com/setup_10.x | bash - && \
    apt-get install -y build-essential nodejs
# Copy everything else and build
COPY ./Xrouter.Service.Explorer ./Xrouter.Service.Explorer
RUN dotnet publish -c Release -o ../dist
# Build runtime image
FROM mcr.microsoft.com/dotnet/core/aspnet:3.0
WORKDIR /app
COPY --from=build-env /dist .
ENTRYPOINT ["dotnet", "Xrouter.Service.Explorer.dll"]