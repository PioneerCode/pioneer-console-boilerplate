# Pioneer .NET Core Console Boilerplate
Boilerplated .NET Core console application that includes dependency injection, logging and configuration. 

## Requirements
The project.json file has been migrated to .csproj and will require the latest [.NET](https://dot.net) tooling. Of which is available in  Visual Sudio 2017 & up.

## How do I get it

### Nuget
Nuget package is hosted at [Pioneer.Console.Boilerplate](https://www.nuget.org/packages/Pioneer.Console.Boilerplate/) and can be installed by running the following...

```bash
dotnet new -i Pioneer.Console.Boilerplate::*
```

### Git 

```bash
https://github.com/PioneerCode/pioneer-console-boilerplate.git
```

## How do I use it
Once the template is installed and available in  ```dotnet new```, you can run the following to scaffold your new project using this template.

```bash
dotnet new pioneer-console -n "MyName"
```

For additional information about config switches for the template, run the following...

```bash
dotnet new pioneer-console -h
```

### Configuration

| Config Parameter | Description |
| :---             | :---        |
| --title | Replaces title in console window header. |

### Meta
This came to life after I wrote the following blog posts.
- [Dependency Injection, Logging and Configuration In A .NET Core Console Application](http://pioneercode.com/post/dependency-injection-logging-and-configuration-in-a-dot-net-core-console-app)
- [How To Create A dotnet new Project Template In .NET Core](http://pioneercode.com/post/how-to-create-a-dot-net-new-project-template-in-dot-net-core)
