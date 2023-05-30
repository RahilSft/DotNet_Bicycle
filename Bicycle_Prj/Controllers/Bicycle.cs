using Microsoft.AspNetCore.Mvc;

namespace Bicycle_Prj.Controllers
{
    public class Bicycle : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Add()
        {
            return View();
        }
    }
}
