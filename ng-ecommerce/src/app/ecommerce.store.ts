import { computed, inject } from '@angular/core';
import { Product } from './models/product';
import {
  patchState,
  signalMethod,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { produce } from 'immer';
import { Toaster } from './services/toaster';
import { CartItem } from './models/cart';
import { MatDialog } from '@angular/material/dialog';
import { SignInDialog } from './components/sign-in-dialog/sign-in-dialog';
import { SignInParams, SignUpParams, User } from './models/user';
import { Router } from '@angular/router';
import { Order } from './models/order';
import { withStorageSync } from '@angular-architects/ngrx-toolkit';

export type EcommerceState = {
  products: Product[];
  category: string;
  wishlistItems: Product[];
  cartItems: CartItem[];
  user: User | undefined;
  loading: boolean;
  selectedProductId: string | undefined;
};

export const EcommerceStore = signalStore(
  { providedIn: 'root' },
  withState({
    products: [
      {
        id: '1',
        name: 'Wireless Noise-Cancelling Headphones',
        description:
          'Premium wireless headphones with active noise cancellation and 30-hour battery life.',
        price: 299.99,
        imageUrl:
          'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
        rating: 4.8,
        reviewCount: 2,
        inStock: true,
        category: 'electronics',
        reviews: [
          {
            id: '1-1',
            productId: '1',
            userName: 'Alexander Wright',
            userImageUrl: 'https://randomuser.me/api/portraits/men/32.jpg',
            rating: 5,
            title: 'Incredible sound quality',
            comment: 'The noise cancellation is top tier, battery lasts for days.',
            reviewDate: new Date('2024-01-15'),
          },
          {
            id: '1-2',
            productId: '1',
            userName: 'Sophia Martinez',
            userImageUrl: 'https://randomuser.me/api/portraits/women/44.jpg',
            rating: 4,
            title: 'Very comfortable',
            comment: 'Great sound, a bit tight at first but got comfortable after a few days.',
            reviewDate: new Date('2024-02-01'),
          },
        ],
      },
      {
        id: '2',
        name: 'Smart 4K UHD Television',
        description:
          'Immersive 4K visual experience with built-in smart home integration and voice control.',
        price: 899.5,
        imageUrl:
          'https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=400&q=80',
        rating: 4.7,
        reviewCount: 2,
        inStock: true,
        category: 'electronics',
        reviews: [
          {
            id: '2-1',
            productId: '2',
            userName: 'Liam Johnson',
            userImageUrl: 'https://randomuser.me/api/portraits/men/45.jpg',
            rating: 5,
            title: 'Stunning display',
            comment: 'Colors pop and the 4K scaling on standard content works wonders.',
            reviewDate: new Date('2024-01-20'),
          },
          {
            id: '2-2',
            productId: '2',
            userName: 'Emma Davis',
            userImageUrl: 'https://randomuser.me/api/portraits/women/28.jpg',
            rating: 4,
            title: 'Good smart features',
            comment: 'The UI is snappy and setup took less than 10 minutes.',
            reviewDate: new Date('2024-02-10'),
          },
        ],
      },
      {
        id: '3',
        name: 'Professional Mirrorless Camera',
        description:
          'High-resolution sensor and advanced autofocus system for stunning photography and 4K video.',
        price: 1250.0,
        imageUrl:
          'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=400&q=80',
        rating: 4.9,
        reviewCount: 1,
        inStock: true,
        category: 'electronics',
        reviews: [
          {
            id: '3-1',
            productId: '3',
            userName: 'Oliver Smith',
            userImageUrl: 'https://randomuser.me/api/portraits/men/52.jpg',
            rating: 5,
            title: 'Pro grade beast',
            comment: 'Autofocus tracking eyes flawlessly, low-light performance is superb.',
            reviewDate: new Date('2024-02-12'),
          },
        ],
      },
      {
        id: '4',
        name: 'Smart Coffee Maker',
        description:
          'Brew your perfect cup of coffee every morning with this Wi-Fi enabled smart coffee maker.',
        price: 149.99,
        imageUrl: 'https://picsum.photos/400/300?random=4',
        rating: 4.6,
        reviewCount: 1,
        inStock: true,
        category: 'home',
        reviews: [
          {
            id: '4-1',
            productId: '4',
            userName: 'Mia Wilson',
            userImageUrl: 'https://randomuser.me/api/portraits/women/65.jpg',
            rating: 5,
            title: 'Morning lifesaver',
            comment: 'Scheduling coffee from my phone before getting out of bed is fantastic.',
            reviewDate: new Date('2024-01-28'),
          },
        ],
      },
      {
        id: '5',
        name: 'Air Purifier',
        description:
          'Advanced HEPA air purifier that captures 99.97% of airborne particles, perfect for bedrooms.',
        price: 199.5,
        imageUrl: 'https://picsum.photos/400/300?random=5',
        rating: 4.8,
        reviewCount: 1,
        inStock: true,
        category: 'home',
        reviews: [
          {
            id: '5-1',
            productId: '5',
            userName: 'Lucas Taylor',
            userImageUrl: 'https://randomuser.me/api/portraits/men/61.jpg',
            rating: 5,
            title: 'Silent and effective',
            comment: 'Night mode is completely silent, helped immensely with my dust allergies.',
            reviewDate: new Date('2024-02-03'),
          },
        ],
      },
      {
        id: '6',
        name: 'Robot Vacuum',
        description:
          'Smart robot vacuum cleaner with self-charging and strong suction for pet hair and hard floors.',
        price: 249.0,
        imageUrl:
          'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?auto=format&fit=crop&w=400&q=80',
        rating: 4.7,
        reviewCount: 2,
        inStock: false,
        category: 'home',
        reviews: [
          {
            id: '6-1',
            productId: '6',
            userName: 'Phoenix Anderson',
            userImageUrl: 'https://randomuser.me/api/portraits/men/70.jpg',
            rating: 5,
            title: 'Excellent app integration',
            comment: 'The mobile app is well-designed and makes controlling the vacuum effortless.',
            reviewDate: new Date('2024-02-07'),
          },
          {
            id: '6-2',
            productId: '6',
            userName: 'Rowan Thompson',
            userImageUrl: 'https://randomuser.me/api/portraits/women/71.jpg',
            rating: 4,
            title: 'Good battery life',
            comment: 'Cleans the whole apartment on a single charge without getting stuck.',
            reviewDate: new Date('2024-02-14'),
          },
        ],
      },
      {
        id: '7',
        name: 'Classic Cotton T-Shirt',
        description: 'Comfortable and breathable 100% cotton t-shirt for everyday wear.',
        price: 19.99,
        imageUrl: 'https://picsum.photos/400/300?random=7',
        rating: 4.5,
        reviewCount: 1,
        inStock: true,
        category: 'clothing',
        reviews: [
          {
            id: '7-1',
            productId: '7',
            userName: 'Ethan Harris',
            userImageUrl: 'https://randomuser.me/api/portraits/men/18.jpg',
            rating: 4,
            title: 'Great fit',
            comment: 'Soft material and holds shape well after multiple washes.',
            reviewDate: new Date('2024-01-10'),
          },
        ],
      },
      {
        id: '8',
        name: 'Vintage Denim Jacket',
        description: 'Timeless blue denim jacket with a relaxed fit and durable stitching.',
        price: 79.5,
        imageUrl: 'https://picsum.photos/400/300?random=8',
        rating: 4.8,
        reviewCount: 1,
        inStock: true,
        category: 'clothing',
        reviews: [
          {
            id: '8-1',
            productId: '8',
            userName: 'Chloe Lewis',
            userImageUrl: 'https://randomuser.me/api/portraits/women/33.jpg',
            rating: 5,
            title: 'Classic style',
            comment: 'Heavy denim that looks and feels like it will last a decade.',
            reviewDate: new Date('2024-01-25'),
          },
        ],
      },
      {
        id: '9',
        name: 'Running Sneakers',
        description:
          'Lightweight running shoes with responsive cushioning for your daily workouts.',
        price: 110.0,
        imageUrl: 'https://picsum.photos/400/300?random=9',
        rating: 4.7,
        reviewCount: 1,
        inStock: true,
        category: 'clothing',
        reviews: [
          {
            id: '9-1',
            productId: '9',
            userName: 'Noah Clark',
            userImageUrl: 'https://randomuser.me/api/portraits/men/22.jpg',
            rating: 5,
            title: 'Super light',
            comment: 'Great arch support for long distance runs.',
            reviewDate: new Date('2024-02-05'),
          },
        ],
      },
      {
        id: '10',
        name: 'Leather Minimalist Watch',
        description: 'Elegant analog watch with a genuine leather strap and water resistance.',
        price: 125.0,
        imageUrl: 'https://picsum.photos/400/300?random=10',
        rating: 4.9,
        reviewCount: 1,
        inStock: true,
        category: 'accessories',
        reviews: [
          {
            id: '10-1',
            productId: '10',
            userName: 'Isabella Hall',
            userImageUrl: 'https://randomuser.me/api/portraits/women/12.jpg',
            rating: 5,
            title: 'Minimal and sleek',
            comment: 'Looks far more expensive than it actually is. Very clean dial.',
            reviewDate: new Date('2024-01-18'),
          },
        ],
      },
      {
        id: '11',
        name: 'Polarized Aviator Sunglasses',
        description:
          'Classic aviator sunglasses with polarized lenses for UV protection and glare reduction.',
        price: 45.99,
        imageUrl: 'https://picsum.photos/400/300?random=11',
        rating: 4.6,
        reviewCount: 1,
        inStock: true,
        category: 'accessories',
        reviews: [
          {
            id: '11-1',
            productId: '11',
            userName: 'James Allen',
            userImageUrl: 'https://randomuser.me/api/portraits/men/15.jpg',
            rating: 4,
            title: 'Solid build',
            comment: 'Great glare protection while driving.',
            reviewDate: new Date('2024-02-02'),
          },
        ],
      },
      {
        id: '12',
        name: 'Slim RFID Blocking Wallet',
        description:
          'Compact cardholder wallet with built-in RFID blocking technology to protect your data.',
        price: 29.5,
        imageUrl: 'https://picsum.photos/400/300?random=12',
        rating: 4.6,
        reviewCount: 6,
        inStock: false,
        category: 'accessories',
        reviews: [
          {
            id: '12-1',
            productId: '12',
            userName: 'Nova Wilson',
            userImageUrl: 'https://randomuser.me/api/portraits/women/67.jpg',
            rating: 5,
            title: 'Compact and secure',
            comment: 'Fits comfortably in the front pocket, cards slide out smoothly.',
            reviewDate: new Date('2024-02-04'),
          },
          {
            id: '12-5',
            productId: '12',
            userName: 'Rowan Thompson',
            userImageUrl: 'https://randomuser.me/api/portraits/women/71.jpg',
            rating: 4,
            title: 'Good battery life',
            comment: 'High quality leather finish and sturdy card slots.',
            reviewDate: new Date('2024-02-09'),
          },
        ],
      },
    ],
    category: 'all',
    wishlistItems: [],
    cartItems: [],
    user: undefined,
    loading: false,
    selectedProductId: undefined,
  } as EcommerceState),
  withStorageSync({
    key: 'modern-store',
    select: ({ wishlistItems, cartItems, user }) => ({ wishlistItems, cartItems }),
  }),
  withComputed(({ category, products, wishlistItems, cartItems, selectedProductId }) => ({
    filteredProducts: computed(() => {
      if (category() === 'all') return products();
      return products().filter((p) => p.category === category().toLowerCase());
    }),
    wishlistCount: computed(() => wishlistItems().length),
    cartCount: computed(() => cartItems().reduce((acc, item) => acc + item.quantity, 0)),
    selectedProduct: computed(() => products().find((p) => p.id === selectedProductId())),
  })),
  withMethods(
    (store, toaster = inject(Toaster), matDialog = inject(MatDialog), router = inject(Router)) => ({
      setCategory: signalMethod<string>((category: string) => {
        patchState(store, { category });
      }),
      setProductId: signalMethod<string>((productId: string) => {
        patchState(store, { selectedProductId: productId });
      }),
      addToWishlist: (product: Product) => {
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });
        patchState(store, { wishlistItems: updatedWishlistItems });
        toaster.success('Product added to wishlist');
      },
      removeFromWishlist: (product: Product) => {
        patchState(store, {
          wishlistItems: store.wishlistItems().filter((p) => p.id !== product.id),
        });
        toaster.success('Product removed from wishlist');
      },
      clearWishlist: () => {
        patchState(store, { wishlistItems: [] });
      },
      addToCart: (product: Product, quantity = 1) => {
        const existingItemIndex = store.cartItems().findIndex((i) => i.product.id === product.id);
        const updateCartItems = produce(store.cartItems(), (draft) => {
          if (existingItemIndex !== -1) {
            draft[existingItemIndex].quantity += quantity;
            return;
          }
          draft.push({ product, quantity });
        });
        patchState(store, { cartItems: updateCartItems });
        toaster.success(
          existingItemIndex !== -1 ? 'Product added again' : 'Product added to the cart',
        );
      },
      setItemQuantity(params: { productId: string; quantity: number }) {
        const index = store.cartItems().findIndex((c) => c.product.id === params.productId);
        const updated = produce(store.cartItems(), (draft) => {
          draft[index].quantity = params.quantity;
        });
        patchState(store, { cartItems: updated });
      },
      addAllWishlistToCart: () => {
        const updatedCartItems = produce(store.cartItems(), (draft) => {
          store.wishlistItems().forEach((p) => {
            if (!draft.find((c) => c.product.id === p.id)) {
              draft.push({ product: p, quantity: 1 });
            }
          });
        });
        patchState(store, { cartItems: updatedCartItems, wishlistItems: [] });
      },
      moveToWishlist: (product: Product) => {
        const updatedCartItems = store.cartItems().filter((p) => p.product.id !== product.id);
        const updatedWishlistItems = produce(store.wishlistItems(), (draft) => {
          if (!draft.find((p) => p.id === product.id)) {
            draft.push(product);
          }
        });
        patchState(store, { cartItems: updatedCartItems, wishlistItems: updatedWishlistItems });
      },
      removeFromCart: (product: Product) => {
        patchState(store, {
          cartItems: store.cartItems().filter((c) => c.product.id !== product.id),
        });
      },
      proceedToCheckout: () => {
        if (!store.user()) {
          matDialog.open(SignInDialog, {
            disableClose: true,
            data: {
              checkout: true,
            },
          });
          return;
        }
        router.navigate(['/checkout']);
      },
      placeOrder: async () => {
        patchState(store, { loading: true });

        const user = store.user();
        if (!user) {
          toaster.error('Please login before placing order');
          patchState(store, { loading: true });
          return;
        }
        const order: Order = {
          id: crypto.randomUUID(),
          userId: user.id,
          total: Math.round(
            store.cartItems().reduce((acc, item) => acc + item.quantity * item.product.price, 0),
          ),
          items: store.cartItems(),
          paymentStatus: 'success',
        };
        await new Promise((resolve) => setTimeout(resolve, 1000));
        patchState(store, { loading: false, cartItems: [] });
        router.navigate(['order-success']);
      },
      signIn: ({ email, password, checkout, dialogId }: SignInParams) => {
        patchState(store, {
          user: {
            id: '1',
            email,
            name: 'John Doe',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          },
        });
        matDialog.getDialogById(dialogId)?.close();
        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      signUp: ({ email, password, name, checkout, dialogId }: SignUpParams) => {
        patchState(store, {
          user: {
            id: '1',
            email,
            name: 'John Doe',
            imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
          },
        });
        matDialog.getDialogById(dialogId)?.close();
        if (checkout) {
          router.navigate(['/checkout']);
        }
      },
      signOut: () => {
        patchState(store, { user: undefined });
      },
    }),
  ),
);
