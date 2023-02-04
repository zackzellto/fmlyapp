FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build-env
WORKDIR /server
EXPOSE 80
EXPOSE 443

# Copy csproj and restore as distinct layers
COPY *.csproj ./
RUN dotnet restore

# Copy everything else and build
COPY . ./
RUN dotnet publish -c Release -o out

# Build runtime image
FROM mcr.microsoft.com/dotnet/aspnet:7.0 AS runtime-env
WORKDIR /server
COPY --from=build-env /server/out .
ENTRYPOINT ["dotnet", "fmly.dll"]