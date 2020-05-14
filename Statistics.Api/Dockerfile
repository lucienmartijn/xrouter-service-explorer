FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app
EXPOSE 8083

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /app

# Copy everything else and build
COPY . ./
RUN dotnet publish Statistics.Api -c Release -o Statistics.Api/out
# Build runtime image

FROM base AS final
COPY --from=build /app/Statistics.Api/out .


ENTRYPOINT ["dotnet", "Statistics.Api.dll"]