using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;

namespace Calculator.Pages
{
    public class IndexModel : PageModel
    {
        public List<double> XValues { get; set; } = new List<double>();
        public List<double> YValues { get; set; } = new List<double>();

        public void OnGet()
        {
            XValues.AddRange(new double[] { 0, 0 });
            YValues.AddRange(new double[] { 0, 0 });
        }

    }
}
