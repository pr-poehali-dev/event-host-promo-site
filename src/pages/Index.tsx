import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: "Music",
      title: "DJ & Музыка",
      description: "Профессиональное музыкальное сопровождение: от романтичных мелодий до танцпола до утра",
      color: "from-violet-500 to-purple-500",
      features: ["Современное оборудование", "Библиотека 10000+ треков", "Работа с заявками гостей"]
    },
    {
      icon: "Lightbulb",
      title: "Свет & Спецэффекты",
      description: "Создам неповторимую атмосферу с помощью профессионального светового оформления",
      color: "from-amber-500 to-orange-500",
      features: ["LED-панели", "Дым-машина", "Световое шоу"]
    },
    {
      icon: "Trophy",
      title: "Интерактивы & Конкурсы",
      description: "Авторские игры и конкурсы, которые зажгут любую публику и создадут вау-эффект",
      color: "from-emerald-500 to-teal-500",
      features: ["Уникальные сценарии", "Реквизит включён", "Подарки победителям"]
    },
    {
      icon: "Camera",
      title: "Фото & Видео",
      description: "Профессиональная съёмка мероприятия + монтаж клипа в подарок",
      color: "from-pink-500 to-rose-500",
      features: ["2 камеры", "Дрон-съёмка", "Обработка за 7 дней"]
    },
    {
      icon: "Mic",
      title: "Ведение церемонии",
      description: "Торжественное и душевное проведение официальной части любого формата",
      color: "from-blue-500 to-cyan-500",
      features: ["Продуманный тайминг", "Адаптация под гостей", "Без пошлости"]
    },
    {
      icon: "PartyPopper",
      title: "Тематические вечеринки",
      description: "Организация мероприятий в стиле: Gatsby, Мафия, Гарри Поттер, 90-е и другие",
      color: "from-fuchsia-500 to-pink-500",
      features: ["Декорации", "Костюмы персонажей", "Погружение в атмосферу"]
    },
  ];

  const testimonials = [
    {
      name: "Анна Петрова",
      event: "Свадьба",
      text: "Наша свадьба прошла просто волшебно! Гости до сих пор вспоминают конкурсы и атмосферу праздника.",
      rating: 5,
    },
    {
      name: "Михаил Иванов",
      event: "Корпоратив",
      text: "Профессионализм на высшем уровне! Смогли расслабить даже самых серьёзных коллег.",
      rating: 5,
    },
    {
      name: "Елена Смирнова",
      event: "Юбилей 50 лет",
      text: "Спасибо за замечательный вечер! Все гости были в восторге, программа продумана до мелочей.",
      rating: 5,
    },
  ];

  const portfolio = [
    { title: "Свадьба в усадьбе", guests: 120, year: 2024 },
    { title: "Корпоратив IT-компании", guests: 80, year: 2024 },
    { title: "Юбилей 60 лет", guests: 50, year: 2023 },
    { title: "Тимбилдинг с Мафией", guests: 40, year: 2024 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted overflow-x-hidden">
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl shadow-2xl shadow-primary/10 py-3' 
          : 'bg-background/60 backdrop-blur-md py-5'
      } border-b border-border/50`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <div className="text-3xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
              🎭
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gradient">Ведущий Мероприятий</h1>
              <p className="text-xs text-muted-foreground">Ваш идеальный праздник</p>
            </div>
          </a>
          
          <div className="hidden lg:flex gap-8 items-center">
            <a href="#services" className="relative group text-sm font-medium">
              <span className="hover:text-primary transition-colors">Услуги</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#portfolio" className="relative group text-sm font-medium">
              <span className="hover:text-primary transition-colors">Портфолио</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#testimonials" className="relative group text-sm font-medium">
              <span className="hover:text-primary transition-colors">Отзывы</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group text-sm font-medium">
              <span className="hover:text-primary transition-colors">Контакты</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 hover-scale shadow-lg shadow-primary/30">
              <Icon name="Sparkles" className="mr-2" size={16} />
              Заказать
            </Button>
          </div>

          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon" className="hover:bg-primary/20">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background/95 backdrop-blur-xl border-l border-border/50">
              <div className="flex flex-col gap-6 mt-8">
                <a 
                  href="#services" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                >
                  <Icon name="Briefcase" size={20} />
                  Услуги
                </a>
                <a 
                  href="#portfolio" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                >
                  <Icon name="Image" size={20} />
                  Портфолио
                </a>
                <a 
                  href="#testimonials" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                >
                  <Icon name="Star" size={20} />
                  Отзывы
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-lg font-medium hover:text-primary transition-colors p-3 rounded-lg hover:bg-primary/10"
                >
                  <Icon name="MessageCircle" size={20} />
                  Контакты
                </a>
                <Button 
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 mt-4 shadow-lg shadow-primary/30"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon name="Sparkles" className="mr-2" size={16} />
                  Заказать
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <section className="relative pt-32 pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 mb-8 fade-in">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="text-sm font-semibold text-primary">Топовый event-специалист 2026</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 fade-in">
              <span className="text-gradient">Превращаю идеи</span><br />
              <span className="text-foreground">в незабываемые</span><br />
              <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">праздники</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed fade-in">
              Организую мероприятия любого формата под ключ: от концепции до последнего танца.
              Работаю с душой, создаю атмосферу, делаю так, чтобы гости просили продолжения.
            </p>
            
            <div className="flex gap-4 justify-center flex-wrap mb-12 fade-in">
              <Button size="lg" className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 hover-scale text-lg px-10 py-7 shadow-2xl shadow-primary/40">
                <Icon name="Sparkles" className="mr-2" size={20} />
                Обсудить мероприятие
              </Button>
              <Button size="lg" variant="outline" className="hover-scale text-lg px-10 py-7 border-2 border-primary/50 text-foreground hover:bg-primary/10 backdrop-blur-sm">
                <Icon name="Play" className="mr-2" size={20} />
                Смотреть шоурил
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto fade-in">
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
              <div className="text-4xl mb-2">🎭</div>
              <div className="text-3xl font-bold text-gradient mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Проведённых событий</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
              <div className="text-4xl mb-2">⭐</div>
              <div className="text-3xl font-bold text-gradient mb-1">8</div>
              <div className="text-sm text-muted-foreground">Лет на сцене</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
              <div className="text-4xl mb-2">🎉</div>
              <div className="text-3xl font-bold text-gradient mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Возвращаются снова</div>
            </Card>
            <Card className="p-6 text-center bg-card/50 backdrop-blur-sm border-border/50 hover-scale">
              <div className="text-4xl mb-2">🏆</div>
              <div className="text-3xl font-bold text-gradient mb-1">15+</div>
              <div className="text-sm text-muted-foreground">Наград и дипломов</div>
            </Card>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-8 items-center text-muted-foreground text-sm fade-in">
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-primary" />
              <span>Полное сопровождение</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-primary" />
              <span>Авторские сценарии</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-primary" />
              <span>Своё оборудование</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="CheckCircle2" size={20} className="text-primary" />
              <span>Гарантия вау-эффекта</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                💼 Что я предлагаю
              </span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-gradient">Комплексные услуги</h2>
            <p className="text-center text-muted-foreground text-xl max-w-2xl mx-auto">
              Всё для вашего мероприятия: от музыки до света. Работаю как полноценная event-команда
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-6 cursor-pointer card-hover bg-card border-2 transition-all duration-500 group relative overflow-hidden ${
                  activeService === index ? 'border-primary' : 'border-transparent'
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon name={service.icon} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <Card className="inline-block p-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <div className="flex items-center gap-8 flex-wrap justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Мероприятий</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-1">8+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
                <div className="h-12 w-px bg-border"></div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-1">98%</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-20 px-6">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gradient">Портфолио</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Последние проведённые мероприятия
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolio.map((item, index) => (
              <Card key={index} className="overflow-hidden hover-scale bg-card border-border">
                <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <Icon name="Image" size={64} className="text-primary/40" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      {item.guests} гостей
                    </span>
                    <span>{item.year}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4 text-gradient">Отзывы</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Что говорят мои клиенты
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 hover-scale bg-card border-border">
                <div className="flex items-center gap-2 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-5xl font-bold text-center mb-4 text-gradient">Связаться со мной</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Расскажите о вашем мероприятии, и я подберу лучший формат
          </p>
          <Card className="p-8 md:p-12 bg-card border-border">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-medium">Ваше имя</label>
                  <Input placeholder="Иван Иванов" className="bg-background border-border" />
                </div>
                <div>
                  <label className="block mb-2 font-medium">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="bg-background border-border" />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-medium">Тип мероприятия</label>
                <Input placeholder="Свадьба, корпоратив, юбилей..." className="bg-background border-border" />
              </div>
              <div>
                <label className="block mb-2 font-medium">Дата мероприятия</label>
                <Input type="date" className="bg-background border-border" />
              </div>
              <div>
                <label className="block mb-2 font-medium">Количество гостей</label>
                <Input type="number" placeholder="50" className="bg-background border-border" />
              </div>
              <div>
                <label className="block mb-2 font-medium">Комментарий</label>
                <Textarea 
                  placeholder="Расскажите подробнее о вашем мероприятии..."
                  className="bg-background border-border min-h-32"
                />
              </div>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg py-6"
                size="lg"
              >
                <Icon name="Send" className="mr-2" />
                Отправить заявку
              </Button>
            </form>
          </Card>

          <div className="mt-12 flex justify-center gap-8 flex-wrap">
            <a href="tel:+79991234567" className="flex items-center gap-2 text-lg hover:text-primary transition-colors hover-scale">
              <Icon name="Phone" />
              +7 (999) 123-45-67
            </a>
            <a href="https://wa.me/79991234567" className="flex items-center gap-2 text-lg hover:text-primary transition-colors hover-scale">
              <Icon name="MessageCircle" />
              WhatsApp
            </a>
            <a href="https://t.me/username" className="flex items-center gap-2 text-lg hover:text-primary transition-colors hover-scale">
              <Icon name="Send" />
              Telegram
            </a>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-border bg-muted/20">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-gradient">🎭 Ведущий Мероприятий</h3>
          <p className="text-muted-foreground mb-6">
            Делаю праздники незабываемыми с 2016 года
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="hover:text-primary transition-colors hover-scale">
              <Icon name="Instagram" size={28} />
            </a>
            <a href="#" className="hover:text-primary transition-colors hover-scale">
              <Icon name="Youtube" size={28} />
            </a>
            <a href="#" className="hover:text-primary transition-colors hover-scale">
              <Icon name="Facebook" size={28} />
            </a>
          </div>
          <p className="mt-8 text-sm text-muted-foreground">
            © 2024 Все права защищены
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;