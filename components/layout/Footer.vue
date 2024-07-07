<template>
      <footer class="footer_section">
        <div class="container">
            <div class="row">
                <div class="col-md-4 footer-col">
                    <div class="footer_contact">
                        <h4>
                            با ما در تماس باشید
                        </h4>
                        <div class="contact_link_box">
                            <a href="https://balad.ir/p/7oyEwKUY7zRZYM">
                                <i class="bi bi-geo-alt-fill"></i>
                                <span>
                                    آدرس     : قم شهرک فاطمیه خیابان بعثت کوچه5 انبار اسلیپر
                                    (جهت مراجعه با پشتیبانی تماس حاصل بفرماید) 
                                </span>
                            </a>
                            <a href="tel:+989918608594">
                                <div class="d-flex justify-content-center align-items-center ">
                                    <i class="bi bi-telephone-fill" aria-hidden="true"></i>
                                    <span class="my-0" style="direction: ltr;" >
                                        09918608594
                                </span>
                                </div>
                            </a>
                            <a href="tel:+2538619413">
                                <div class="d-flex justify-content-center align-items-center ">
                                    <i class="bi bi-telephone-fill" aria-hidden="true"></i>
                                    <span class="my-0" style="direction: ltr;" >
                                        02538619413
                                </span>
                                </div>
                            </a>
                           
                           
                        </div>
                    </div>
                </div>
                <div class="col-md-4 footer-col">
                    <div class="footer_detail">
                        <a href="" class="footer-logo">
                           <img src="/images/logo.png" alt="" height="120" width="240   ">
                        </a>
                        <p>
                            اسلیپر استور نخستین فروشگاه آنلاین فروش دمپایی کیف کفش  به صورت خرده در ایران
                            ارسال رایگان به سراسر کشور 
                        </p>
                        <div class="footer_social">
                            <a href="https://eitaa.com/sliperir" >
                                
                                <svg 
                                    style="fill: black"
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    width="15px" height="15px">
                                <image  x="0px" y="0px" width="15px" height="15px"  xlink:href="data:img/png;base64,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" />
                                </svg>
                            </a>
                            <a href="https://wa.link/la7h4b">
                                <i class="bi bi-whatsapp"></i>
                            </a>
                            
                            <a href="">
                                <i class="bi bi-instagram"></i>
                            </a>
                          
                        </div>
                    </div>
                </div>
                <div class="col-md-4 footer-col">
                    <h4>
                        ساعت کاری
                    </h4>
                    <p>
                     <p>پشتیبانی به صورت 24 ساعته</p>
                     انبار : از 8 تا 10 شب 
                    </p>
                    <hr>
                    
                </div>
            </div>
            <div class="footer-info">
                <a href="https://alishirinipazy.ir">
                  طراحی و توسعه با عشق ❤️ <img width="130" height="80" src="/images/ali-shirinipazyDarkNew.png" alt="علی شیرینی پزی">
                </a>
            </div>
        </div>
    </footer>
</template>