import * as React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="font-dynapuff">
      <AccordionItem value="item-1">
        <AccordionTrigger className='sm:text-lg text-sm'>Apa aja varian rasa yang tersedia?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>
          Kami punya berbagai varian rasa yang pastinya segar dan menggugah selera! Beberapa pilihan rasa yang bisa kamu coba:
          <ol className="list-disc pl-5">
            <li>Mangga</li>
            <li>Kelapa</li>
            <li>Strawberry</li>
          </ol>
          Pilih sesuai selera kamu atau coba semua!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className='sm:text-lg text-sm'>Bahannya alami gak?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>Iya, produk kami menggunakan bahan-bahan alami, tanpa bahan pengawet atau pewarna buatan. Nata de coco yang kami buat benar-benar segar dan kenyal, dengan rasa buah yang asli. Jadi, kamu bisa ngemil tanpa khawatir!</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className='sm:text-lg text-sm'>Bagaimana cara penyimpanan yang benar?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>Agar tetap segar dan kenyal, simpan nata de coco di kulkas ya! Kalau belum dibuka, produk kami aman disimpan di suhu ruang selama 2-3 hari, tapi lebih baik dinginkan untuk keawetan maksimal.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger className='sm:text-lg text-sm'>Gimana cara order?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>
          Untuk memesan, kamu bisa:
          <ol className="list-disc pl-5">
            <li>WhatsApp: 08xxxxxxxxxx</li>
            <li>Instagram DM: @nata_coco.id</li>
          </ol>
          Kamu tinggal pilih varian rasa, jumlah yang diinginkan, dan alamat pengiriman.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger className='sm:text-lg text-sm'>Bisa beli dalam jumlah banyak atau untuk acara khusus gak?</AccordionTrigger>
        <AccordionContent className='sm:text-lg text-xs'>Tentu bisa! Kalau kamu butuh dalam jumlah banyak, buat acara atau hampers, langsung aja hubungi kami untuk pemesanan khusus dan diskon menarik!</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FaqAccordion;
