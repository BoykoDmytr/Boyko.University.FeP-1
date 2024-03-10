using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

public class CalculatorController : Controller
{
    public IActionResult Index()
    {
        return View();
    }
}