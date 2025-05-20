import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="font-dynapuff">
      <AccordionItem value="item-1">
        <AccordionTrigger className='sm:text-lg text-sm'>❓ CocoChew itu apa sih?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>
          CocoChew adalah nata de coco dengan tekstur kenyal dan rasa segar, cocok banget buat campuran minuman, dessert, atau dinikmati langsung sebagai camilan sehat.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='sm:text-lg text-sm'>❓ Bahannya alami gak?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>Iya, produk kami menggunakan bahan-bahan alami, tanpa bahan pengawet atau pewarna buatan. Nata de coco yang kami buat benar-benar segar dan kenyal, dengan rasa buah yang asli. Jadi, kamu bisa ngemil tanpa khawatir!</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='sm:text-lg text-sm'>❓ Ada rasa tambahan gak?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>Untuk sekarang, CocoChew fokus ke rasa original biar tetap natural dan bisa kamu mix sendiri sesuai selera. Tapi stay tuned, bakal ada varian rasa lain ke depannya!</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='sm:text-lg text-sm'>❓ Gimana cara order?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>
          Untuk memesan, kamu bisa:
          <ol className="list-disc pl-5">
            <li className="text-blue-700">
              <a 
                href="https://wa.link/vzq6vx"
                target="_blank"
                rel="noopener noreferrer"
                >WhatsApp: +6285642992706
              </a>
            </li>
            <li>Instagram DM: @getnaco.id</li>
          </ol>
          Kamu tinggal bilang jumlah yang diinginkan, dan alamat pengiriman.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className='sm:text-lg text-sm'>❓ Bisa beli dalam jumlah banyak atau untuk acara khusus gak?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>Tentu bisa! Kalau kamu butuh dalam jumlah banyak, buat acara atau hampers, langsung aja hubungi kami untuk pemesanan khusus dan diskon menarik!</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
