
import React, { useState, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import ProductCard, { Product } from './ProductCard';

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  // Skincare Products
  { id: 1, name: "Hydrating Vitamin C Serum", price: 2499, originalPrice: 3499, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.5, reviews: 256 },
  { id: 2, name: "Anti-Aging Night Cream", price: 3999, image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?q=80&w=400", category: "skincare", gender: "women", rating: 4.8, reviews: 189 },
  
  // Makeup Products
  { id: 3, name: "Matte Liquid Lipstick Set", price: 1899, originalPrice: 2499, image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?q=80&w=400", category: "makeup", gender: "women", rating: 4.6, reviews: 342 },
  { id: 4, name: "Foundation & Concealer Kit", price: 2799, image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=400", category: "makeup", gender: "women", rating: 4.7, reviews: 198 },
  { id: 5, name: "Eyeshadow Palette - Sunset", price: 2199, originalPrice: 2999, image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=400", category: "makeup", gender: "women", rating: 4.9, reviews: 456 },
  
  // Haircare Products
  { id: 6, name: "Argan Oil Hair Serum", price: 1599, image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400", category: "haircare", gender: "unisex", rating: 4.4, reviews: 123 },
  { id: 7, name: "Strengthening Shampoo", price: 899, originalPrice: 1299, image: "https://images.unsplash.com/photo-1594736797933-d0ef536ac249?q=80&w=400", category: "haircare", gender: "unisex", rating: 4.3, reviews: 234 },
  { id: 8, name: "Deep Conditioning Hair Mask", price: 1799, image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=400", category: "haircare", gender: "women", rating: 4.6, reviews: 167 },
  
  // Men's Products
  { id: 9, name: "Men's Beard Oil", price: 1299, image: "https://images.unsplash.com/photo-1564979268369-42032c5ca998?q=80&w=400", category: "skincare", gender: "men", rating: 4.5, reviews: 89 },
  { id: 10, name: "Men's Face Wash", price: 799, originalPrice: 999, image: "https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400", category: "skincare", gender: "men", rating: 4.2, reviews: 156 },
  { id: 11, name: "Men's Hair Styling Gel", price: 699, image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?q=80&w=400", category: "haircare", gender: "men", rating: 4.1, reviews: 78 },
  
  // Fragrances
  { id: 12, name: "Rose & Vanilla Perfume", price: 4499, originalPrice: 5999, image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=400", category: "fragrance", gender: "women", rating: 4.8, reviews: 267 },
  { id: 13, name: "Men's Woody Cologne", price: 3999, image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?q=80&w=400", category: "fragrance", gender: "men", rating: 4.6, reviews: 134 },
  
  // Facial Products
  { id: 14, name: "Charcoal Face Mask", price: 1299, image: "https://images.unsplash.com/photo-1570554886111-e80fcca6a029?q=80&w=400", category: "facial", gender: "unisex", rating: 4.4, reviews: 298 },
  { id: 15, name: "Hydrating Sheet Masks (5-Pack)", price: 999, originalPrice: 1499, image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=400", category: "facial", gender: "women", rating: 4.7, reviews: 445 },
  
  // Additional Products
  { id: 16, name: "Vitamin E Body Lotion", price: 1099, image: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.3, reviews: 189 },
  { id: 17, name: "Lip Balm Set - Natural", price: 599, originalPrice: 899, image: "https://images.unsplash.com/photo-1607748862156-7c548e7e98f4?q=80&w=400", category: "skincare", gender: "unisex", rating: 4.5, reviews: 123 },
  { id: 18, name: "Makeup Brush Set Professional", price: 2999, image: "https://images.unsplash.com/photo-1457972866581-47b813d2773e?q=80&w=400", category: "makeup", gender: "women", rating: 4.9, reviews: 356 },
];

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [selectedGender, setSelectedGender] = useState<'all' | 'men' | 'women'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'skincare', 'makeup', 'haircare', 'fragrance', 'facial'];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const genderMatch = selectedGender === 'all' || 
                         product.gender === selectedGender || 
                         product.gender === 'unisex';
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      return genderMatch && categoryMatch;
    });
  }, [selectedGender, selectedCategory]);

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

        {/* Filter Controls */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>

            <div className={`${showFilters ? 'block' : 'hidden lg:block'} w-full lg:w-auto`}>
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
            </div>

            <div className={`${showFilters ? 'block' : 'hidden lg:block'} w-full lg:w-auto`}>
              {/* Category Filter */}
              <div className="flex flex-wrap items-center gap-2">
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
            <p className="text-xl text-muted-foreground">No products found matching your filters.</p>
            <Button
              onClick={() => {
                setSelectedGender('all');
                setSelectedCategory('all');
              }}
              className="mt-4 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
