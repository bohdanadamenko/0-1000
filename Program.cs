using System;
using System.Text;

namespace GuessTheNumber
{
    class Program
    {
        static void Main(string[] args)
        {
            // Ensure Ukrainian text displays correctly in terminal
            Console.OutputEncoding = Encoding.UTF8;
            Console.InputEncoding = Encoding.UTF8;

            Console.Clear();
            Console.WriteLine("╔════════════════════════════════════════════╗");
            Console.WriteLine("║            ВГАДАЙ ЧИСЛО (1 - 1000)         ║");
            Console.WriteLine("╚════════════════════════════════════════════╝");
            Console.WriteLine("\nЗагадайте число від 1 до 1000.");
            Console.WriteLine("Я вгадаю його максимально за 10 запитань.");
            Console.WriteLine("\nНатисніть будь-яку клавішу, коли будете готові...");
            Console.ReadKey(true);

            int low = 1;
            int high = 1000;
            int questions = 0;
            const int MAX_QUESTIONS = 10;

            while (low < high && questions < MAX_QUESTIONS)
            {
                int mid = low + (high - low) / 2;
                questions++;

                Console.WriteLine($"\n[Питання {questions}/{MAX_QUESTIONS}]");
                Console.Write($"Чи вірно, що задумане число БІЛЬШЕ ніж {mid}? (ТАК/НІ): ");
                
                string? input = Console.ReadLine()?.Trim().ToLower();

                if (input == "так" || input == "т" || input == "+")
                {
                    low = mid + 1;
                }
                else
                {
                    high = mid;
                }
            }

            Console.Clear();
            Console.WriteLine("╔════════════════════════════════════════════╗");
            Console.WriteLine($"║        ВАШЕ ЧИСЛО: {low}          ║");
            Console.WriteLine("╚════════════════════════════════════════════╝");

            if (questions <= MAX_QUESTIONS)
            {
                Console.ForegroundColor = ConsoleColor.Yellow;
                Console.WriteLine("\n🏆 ВІТАЮ! ВИ ВИГРАЛИ ТРОФЕЙ ЧЕМПІОНА!");
                Console.WriteLine("💰 БОНУС: +1000$ ПРЕМІЯ");
                Console.ResetColor();
            }
            else
            {
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("\n❌ ГРА ЗАКІНЧЕНА. ЛІМІТ ЗАПИТАНЬ ВИЧЕРПАНО.");
                Console.WriteLine("💸 ШТРАФ: -500$");
                Console.ResetColor();
            }

            Console.WriteLine("\nДякуємо за гру! Натисніть будь-яку клавішу для виходу...");
            Console.ReadKey(true);
        }
    }
}
