
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Filter, Search, X } from 'lucide-react';
import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  // Skincare Products
  { id: 1, name: "Hydrating Vitamin C Serum", price: 2499, originalPrice: 3499, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.5, reviews: 256 },
  { id: 2, name: "Anti-Aging Night Cream", price: 3999, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400", category: "skincare", gender: "women", rating: 4.8, reviews: 189 },
  { id: 16, name: "Vitamin E Body Lotion", price: 1099, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.3, reviews: 189 },
  { id: 17, name: "Lip Balm Set - Natural", price: 599, originalPrice: 899, image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.5, reviews: 123 },
  { id: 19, name: "Retinol Face Serum", price: 2799, image: "https://images.unsplash.com/photo-1570194065650-d99c120143ac?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.7, reviews: 310 },
  { id: 20, name: "Niacinamide Brightening Serum", price: 1899, originalPrice: 2499, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400", category: "skincare", gender: "women", rating: 4.6, reviews: 245 },
  { id: 21, name: "Hyaluronic Acid Moisturizer", price: 2199, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.8, reviews: 189 },
  
  // Makeup Products
  { id: 3, name: "Matte Liquid Lipstick Set", price: 1899, originalPrice: 2499, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400", category: "makeup", gender: "women", rating: 4.6, reviews: 342 },
  { id: 4, name: "Foundation & Concealer Kit", price: 2799, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400", category: "makeup", gender: "women", rating: 4.7, reviews: 198 },
  { id: 5, name: "Eyeshadow Palette - Sunset", price: 2199, originalPrice: 2999, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400", category: "makeup", gender: "women", rating: 4.9, reviews: 456 },
  { id: 18, name: "Makeup Brush Set Professional", price: 2999, image: "https://images.unsplash.com/photo-1457972866581-47b813d2773e?q=80&w=400", category: "makeup", gender: "women", rating: 4.9, reviews: 356 },
  { id: 22, name: "Waterproof Mascara", price: 1299, image: "https://images.unsplash.com/photo-1631730486887-4d4d23d2a45c?q=80&w=400", category: "makeup", gender: "women", rating: 4.5, reviews: 278 },
  { id: 23, name: "Blush & Highlight Duo", price: 1699, originalPrice: 2199, image: "https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=400", category: "makeup", gender: "women", rating: 4.7, reviews: 156 },
  { id: 24, name: "Eyeliner Pencil Set", price: 899, image: "https://images.unsplash.com/photo-1512496015851-a90c9804578c?q=80&w=400", category: "makeup", gender: "women", rating: 4.4, reviews: 203 },
  { id: 25, name: "Lip Gloss Collection", price: 1599, image: "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=400", category: "makeup", gender: "women", rating: 4.6, reviews: 167 },
  
  // Haircare Products
  { id: 6, name: "Argan Oil Hair Serum", price: 1599, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400", category: "haircare", gender: "unisex", rating: 4.4, reviews: 123 },
  { id: 7, name: "Strengthening Shampoo", price: 899, originalPrice: 1299, image: "https://images.unsplash.com/photo-1594736797933-d0ef536ac249?q=80&w=400", category: "haircare", gender: "unisex", rating: 4.3, reviews: 234 },
  { id: 8, name: "Deep Conditioning Hair Mask", price: 1799, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400", category: "haircare", gender: "women", rating: 4.6, reviews: 167 },
  { id: 11, name: "Men's Hair Styling Gel", price: 699, image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=400", category: "haircare", gender: "men", rating: 4.1, reviews: 78 },
  { id: 26, name: "Dry Shampoo Spray", price: 1199, image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?q=80&w=400", category: "haircare", gender: "women", rating: 4.5, reviews: 189 },
  { id: 27, name: "Hair Growth Oil", price: 1899, originalPrice: 2399, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400", category: "haircare", gender: "unisex", rating: 4.7, reviews: 234 },
  { id: 28, name: "Heat Protection Spray", price: 1099, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400", category: "haircare", gender: "women", rating: 4.4, reviews: 145 },
  
  // Men's Products
  { id: 9, name: "Men's Beard Oil", price: 1299, image: "https://images.unsplash.com/photo-1564979268369-42032c5ca998?q=80&w=400", category: "skincare", gender: "men", rating: 4.5, reviews: 89 },
  { id: 10, name: "Men's Face Wash", price: 799, originalPrice: 999, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400", category: "skincare", gender: "men", rating: 4.2, reviews: 156 },
  { id: 29, name: "Men's Aftershave Balm", price: 1599, image: "https://images.unsplash.com/photo-1506629905313-11d4d5dc8ad0?q=80&w=400", category: "skincare", gender: "men", rating: 4.6, reviews: 123 },
  { id: 30, name: "Men's Anti-Aging Cream", price: 2299, image: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?q=80&w=400", category: "skincare", gender: "men", rating: 4.4, reviews: 98 },
  { id: 31, name: "Men's Shaving Cream", price: 899, originalPrice: 1199, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400", category: "skincare", gender: "men", rating: 4.3, reviews: 167 },
  
  // Fragrances
  { id: 12, name: "Rose & Vanilla Perfume", price: 4499, originalPrice: 5999, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400", category: "fragrance", gender: "women", rating: 4.8, reviews: 267 },
  { id: 13, name: "Men's Woody Cologne", price: 3999, image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=400", category: "fragrance", gender: "men", rating: 4.6, reviews: 134 },
  { id: 32, name: "Citrus Fresh Eau de Toilette", price: 2999, image: "https://images.unsplash.com/photo-1594736797933-d0ef536ac249?q=80&w=400", category: "fragrance", gender: "unisex", rating: 4.5, reviews: 189 },
  { id: 33, name: "Floral Mist Body Spray", price: 1799, originalPrice: 2299, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400", category: "fragrance", gender: "women", rating: 4.7, reviews: 145 },
  { id: 34, name: "Men's Sport Deodorant", price: 699, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400", category: "fragrance", gender: "men", rating: 4.2, reviews: 234 },
  
  // Facial Products
  { id: 14, name: "Charcoal Face Mask", price: 1299, image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=400", category: "facial", gender: "unisex", rating: 4.4, reviews: 298 },
  { id: 15, name: "Hydrating Sheet Masks (5-Pack)", price: 999, originalPrice: 1499, image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400", category: "facial", gender: "women", rating: 4.7, reviews: 445 },
  { id: 35, name: "Clay Face Mask Set", price: 1599, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400", category: "facial", gender: "unisex", rating: 4.6, reviews: 178 },
  { id: 36, name: "Gold Collagen Face Mask", price: 2199, originalPrice: 2899, image: "https://images.unsplash.com/photo-1570194065650-d99c120143ac?q=80&w=400", category: "facial", gender: "women", rating: 4.8, reviews: 267 },
  { id: 37, name: "Exfoliating Face Scrub", price: 1099, image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?q=80&w=400", category: "facial", gender: "unisex", rating: 4.5, reviews: 189 },
  { id: 38, name: "Brightening Face Toner", price: 1399, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400", category: "facial", gender: "women", rating: 4.7, reviews: 156 },
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 6000]);

  const categories = ['all', 'skincare', 'makeup', 'haircare', 'fragrance', 'facial'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const genderMatch = selectedGender === 'all' || 
                         product.gender === selectedGender || 
                         product.gender === 'unisex';
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      const searchMatch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      
      return genderMatch && categoryMatch && searchMatch && priceMatch;
    });
  }, [selectedGender, selectedCategory, searchQuery, priceRange]);

  const clearFilters = () => {
    setSelectedGender('all');
    setSelectedCategory('all');
    setSearchQuery('');
    setPriceRange([0, 6000]);
  };

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Our Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our premium collection of beauty and cosmetics products
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>

        {/* Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters {(selectedGender !== 'all' || selectedCategory !== 'all' || searchQuery || priceRange[0] > 0 || priceRange[1] < 6000) && '(Active)'}
            </Button>

            <div className={`${showFilters ? 'block' : 'hidden lg:block'} w-full lg:w-auto space-y-4 lg:space-y-0`}>
              {/* Gender Filter */}
              <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-0">
                <span className="text-sm font-medium text-muted-foreground mr-2">Gender:</span>
                {['all', 'women', 'men'].map((gender) => (
                  <Button
                    key={gender}
                    variant={selectedGender === gender ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedGender(gender as 'all' | 'men' | 'women')}
                    className={selectedGender === gender ? 
                      "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" : 
                      "hover:bg-pink-50 dark:hover:bg-pink-950"
                    }
                  >
                    {gender.charAt(0).toUpperCase() + gender.slice(1)}
                  </Button>
                ))}
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-2 mb-4 lg:mb-0">
                <span className="text-sm font-medium text-muted-foreground mr-2">Category:</span>
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? 
                      "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700" : 
                      "hover:bg-pink-50 dark:hover:bg-pink-950"
                    }
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Button>
                ))}
              </div>

              {/* Price Range Filter */}
              <div className="w-full lg:w-80">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-sm font-medium text-muted-foreground">Price Range:</span>
                  <span className="text-sm text-muted-foreground">
                    ₹{priceRange[0]} - ₹{priceRange[1]}
                  </span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={6000}
                  min={0}
                  step={100}
                  className="w-full"
                />
              </div>

              {/* Clear Filters */}
              {(selectedGender !== 'all' || selectedCategory !== 'all' || searchQuery || priceRange[0] > 0 || priceRange[1] < 6000) && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="ml-4"
                >
                  Clear Filters
                </Button>
              )}
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground mb-4">No products found matching your criteria.</p>
            <Button
              onClick={clearFilters}
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Clear All Filters
            </Button>
          </div>
        )}

        {/* Results Count */}
        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
