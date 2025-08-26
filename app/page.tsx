import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Users, Heart, ShoppingCart, BookOpen, Phone } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Leaf className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Nyota Beans</h1>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </a>
              <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                Products
              </a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">
                Services
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
              <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4 bg-secondary/20 text-secondary-foreground border-secondary/30">
            Premium Natural Beans
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
            Sustainable Nyota Bean
            <span className="text-primary block">Farming Excellence</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Connecting farmers, food entrepreneurs, and health-conscious consumers through premium quality Nyota beans.
            Discover sustainable farming practices and nutritious food solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <ShoppingCart className="mr-2 h-5 w-5" />
              Shop Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10 bg-transparent"
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Target Audiences */}
      <section id="about" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Who We Serve</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our Nyota bean farming connects three key communities in the sustainable food ecosystem
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">Farmers</CardTitle>
                <CardDescription>Agricultural professionals interested in Nyota bean cultivation</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Sustainable farming techniques</li>
                  <li>• High-yield cultivation methods</li>
                  <li>• Market access and support</li>
                  <li>• Training and resources</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-secondary/10 rounded-full w-fit">
                  <Users className="h-8 w-8 text-secondary" />
                </div>
                <CardTitle className="text-xl">Food Entrepreneurs</CardTitle>
                <CardDescription>Businesses in the food industry seeking premium ingredients</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Bulk supply partnerships</li>
                  <li>• Quality assurance programs</li>
                  <li>• Custom processing solutions</li>
                  <li>• Brand collaboration opportunities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-accent/10 rounded-full w-fit">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <CardTitle className="text-xl">Health-Conscious Consumers</CardTitle>
                <CardDescription>Individuals seeking nutritious, natural food options</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• High protein content</li>
                  <li>• Rich in essential nutrients</li>
                  <li>• Sustainably grown</li>
                  <li>• Versatile cooking options</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products & Services */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Our Offerings</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Premium Nyota beans and comprehensive services for every stage of the supply chain
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Premium Nyota Beans</CardTitle>
                <CardDescription>High-quality, sustainably grown beans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/premium-nyota-beans.png"
                    alt="Premium Nyota Beans"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90">View Products</Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Farming Consultation</CardTitle>
                <CardDescription>Expert guidance for optimal cultivation</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-iy75e.png"
                    alt="Farming Consultation"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Processing Services</CardTitle>
                <CardDescription>Custom processing and packaging solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/modern-bean-processing.png"
                    alt="Processing Services"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
                >
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">Educational Resources</CardTitle>
                <CardDescription>Training materials and workshops</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <img
                    src="/placeholder-kq0n0.png"
                    alt="Educational Resources"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                <Button
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10 bg-transparent"
                >
                  Access Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Join the Nyota Bean Community?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Whether you're a farmer, entrepreneur, or health-conscious consumer, we have the perfect solution for your
            Nyota bean needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <Phone className="mr-2 h-5 w-5" />
              Contact Us Today
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              Download Catalog
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <h3 className="text-lg font-bold">Nyota Beans</h3>
              </div>
              <p className="text-muted-foreground text-sm">
                Sustainable farming for a healthier future. Premium Nyota beans for everyone.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Products</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Premium Beans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Organic Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Bulk Orders
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Farming Consultation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Processing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">
                    Training
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>info@nyotabeans.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Farm Road, Agriculture Valley</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Nyota Bean Farming. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
