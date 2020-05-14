FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app
EXPOSE 8082

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /app

# Copy everything else and build
COPY . ./
RUN dotnet publish XRouter.Api -c Release -o XRouter.Api/out
# Build runtime image

FROM base AS final
COPY --from=build /app/XRouter.Api/out .


ENTRYPOINT ["dotnet", "XRouter.Api.dll"]