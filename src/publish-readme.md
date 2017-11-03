Local
- Build project
- Run default gulp task
- Run: dotnet new --install C:\source\pioneer-console-boilerplate\src\Pioneer.Console.Boilerplate.Template
- Run: dotnet new consoleboilerplate -n my.console

Nuget
- Build project
- Run npm install on root
  - Run default gulp task on root
- Package: nuget pack
  - Run on .template folder.
  - You will download the nuget.exe and target it from the command line
- Publish to nuget.org
