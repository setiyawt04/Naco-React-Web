import React, { useRef } from 'react';
import RecipeReviewCard from '../components/RecipeReviewCard';
import productBg from '../assets/images/bg.jpg'
import { motion, useInView } from "framer-motion";
import produk1 from '../assets/images/produk1.jpg'



const products = [
    {
        title: "CocoChew",
        subheader: "Nata de Coco Segar dengan Rasa Buah yang Melekat di Setiap Gigitan.",
        image: produk1,
        price: "Rp. 3500/cup",
        description: "CocoChew itu nata de coco yang super kenyal dan seger alami, cocok buat kamu yang suka minuman atau dessert yang makin enak dan nyegerin. Dibuat dari bahan pilihan tanpa tambahan pengawet, jadi aman dan sehat buat dinikmati kapan aja. Cocok banget buat campuran jus, es buah, yogurt, atau cemilan sehari-hari.",
        
      },
      
];



function Products() {
    const fadeIn = useRef(null)
    const fadeInAnimation = useInView(fadeIn)
    console.log(fadeInAnimation)
  return (
    <>
    <div id="Products" className='z-30 bg-cover bg-center bg-no-repeat w-full h-auto pb-20' style={{backgroundImage:`url(${productBg})`, backgroundSize:'cover', backgroundPosition: 'center center'}}>
        
        <motion.div
            ref={fadeIn}
            initial={{opacity: 0, y:5}}
            animate= {fadeInAnimation ? { opacity: 1, y:0 }: { opacity: 0, y: 5 }}
            transition={{duration: 0.6, delay:0}}
        >
            <h1 className='sm:text-4xl text-3xl font-dynapuff font-medium text-white text-center pt-20 pb-10'>Our Products</h1>
        </motion.div>
        
        <div className='flex justify-center z-50 gap-10 items-start flex-wrap p-10'>
            {products.map((product, index) => {
                const fadeProduct = useRef(null)
                const productAnimation = useInView(fadeProduct)

                return (
                <motion.div
                    key={index}
                    ref={fadeProduct}
                    initial={{opacity: 0, y:5}}
                    animate= {productAnimation? { opacity: 1, y:0 }: { opacity: 0, y: 5 }}
                    transition={{duration: 0.6, delay: index * 0.2}}
                    className='mb-3'
                >
                    <RecipeReviewCard 
                        title={product.title}
                        subheader={product.subheader}
                        image={product.image}
                        price={product.price}
                        description={product.description}
                    />
                </motion.div>
            );
        })}
                
                
           
            
        </div>

        
    </div>
    </>
  )
}

export default Products