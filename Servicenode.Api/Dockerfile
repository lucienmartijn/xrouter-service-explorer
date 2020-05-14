FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app
EXPOSE 8084

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /app

# Copy everything else and build
COPY . ./
RUN dotnet publish Servicenode.Api -c Release -o Servicenode.Api/out
# Build runtime image

FROM base AS final
COPY --from=build /app/Servicenode.Api/out .


ENTRYPOINT ["dotnet", "Servicenode.Api.dll"]