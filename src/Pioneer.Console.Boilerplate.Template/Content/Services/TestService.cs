using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using Pioneer.Console.Boilerplate.Models;

namespace Pioneer.Console.Boilerplate.Services
{
    public interface ITestService
    {
        void Run();
    }

    public class TestService : ITestService
    {
        private readonly ILogger<TestService> _logger;
        private readonly AppSettings _config;

        public TestService(ILogger<TestService> logger,
            IOptions<AppSettings> config)
        {
            _logger = logger;
            _config = config.Value;
        }

        public void Run()
        {
            _logger.LogWarning($"Wow! We are now in the test service of: {_config.ConsoleTitle}");
        }
    }
}
