import React, { useRef } from 'react';
import RecipeReviewCard from '../components/RecipeReviewCard';
import productBg from '../assets/images/bg.jpg'
import { motion, useInView } from "framer-motion";
import Faq from './Faq';
import Footer from './Footer';
import produk1 from '../assets/images/produk1.jpg'
import produk2 from '../assets/images/produk2.jpg'
import produk3 from '../assets/images/produk3.jpg'


const products = [
    {
        title: "CocoTwist",
        subheader: "Nata de Coco Segar dengan Rasa Buah yang Melekat di Setiap Gigitan.",
        image: produk1,
        price: "Rp. 3000/cup",
        description: "Nikmati sensasi segar dan kenyal dalam setiap gigitan CocoTwist.. ikmati sensasi segar dan kenyal dalam setiap gigitan CocoTwist.. ikmati sensasi segar dan kenyal dalam setiap gigitan CocoTwist...",
        
      },
      {
        title: "StrawBerryPop",
        subheader: "Ledakan rasa stroberi dalam setiap sendokannya.",
        image: produk2,
        price: "Rp. 3500/cup",
        description: "Rasa stroberi yang segar cocok untuk pencinta buah manis.",
        
      },
      {
        title: "MangoBlast",
        subheader: "Segarnya mangga yang menggugah selera.",
        image: produk3,
        price: "Rp. 3500/cup",
        description: "Dibuat dari mangga asli yang manis dan menyegarkan.",
        
    }
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
            <h1 className='sm:text-3xl text-xl font-dynapuff font-medium text-white text-center pt-20 pb-10'>Our Products</h1>
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
        <div>
            
            <Faq />
        </div>
        
    </div>
    </>
  )
}

export default Products