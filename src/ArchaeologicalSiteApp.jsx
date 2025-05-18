/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-dupe-keys */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {  useEffect } from 'react';
import { ChevronLeft, ChevronRight, Menu, X, ExternalLink } from 'lucide-react';
import './App.css';
import bg1 from './images/WhatsApp Image 2025-011-10 at 00.08.00.jpeg';
import bg2 from './images/WhatsApp Image 2025-01-10 at 00.08.01.jpeg';
import bg3 from './images/WhatsApp Image 2025-04-10 at 00.08.03.jpeg';
import bg4 from './images/134412284_210331190722733_7476603454664413390_n.jpg';
import bg5 from './images/images.jpeg';
import bg6 from './images/114786-هرم-اللاهون-(1).jpg';
import bg7 from './images/El_Lahun_Pyramid_01.JPG';
import bg8 from './images/WhatsApp Image 2025-04-27 at 02.15.19.jpeg';
import bg9 from './images/330px-Hawara.jpg';
import bg10 from './images/هرم_هوارة_المقطع_الفيوم.jpg';
import bg11 from './images/WhatsApp Image 2025-04-1at 00.06.10.jpeg';
import bg12 from './images/WhatsApp Image 2025-0-10 at 00.06.12.jpeg';
import bg13 from './images/WhatsApp Image 2025-04-10 at 00.06.10.jpeg';
import bg14 from './images/WhatsApp Image 2025-04-10 at 00.06.122.jpeg';
import bg15 from './images/WhatsApp Image 2025-04-10 at 00.06.11.jpeg';
import bg16 from './images/WhatsApp Image 2025-04-000 at 00.06.11.jpeg';

import bg17 from './images/WhatsApp Image 2025-04-10 at 00.06.04.jpeg';
import bg18 from './images/WhatsApp Image 20 at 00.06.05.jpeg';
import bg19 from './images/images-2-11.jpeg';



import bg20 from './images/WhatsApp Image 225-04-10 at 00.06.10.jpeg';
import bg21 from './images/WhatsApp Image 202-04-10 at 00.06.12.jpeg';
import bg22 from './images/WhatsApp Image 111 at 00.06.04.jpeg';
import bg23 from './images/WhatsApp Image 20 at 00.06.06.jpeg';
import bg24 from './images/WhatsApp Image 2025-01-10 at 00.08.01.jpeg';
import bg25 from './images/WhatsApp Image 2025-04-1 at 00.06.13.jpeg';
import bg26 from './images/WhatsApp Image 2025-04-10 at 00.06.12.jpeg';
import bg27 from './images/WhatsApp Image 2025-04-10 at 00.06.13.jpeg';
import bg28 from './images/WhatsApp Image 2025-04-10 at 00.08.01.jpeg';
import bg29 from './images/WhatsApp Image 2025-04-10 at 00.08.02.jpeg';
import bg30 from './images/WhatsApp Image 2025-04-10 at 00.06.05.jpeg';


import bg31 from './images/WhatsApp Image 2025-05-16 at 23.36.56.jpeg';

import bg32 from './images/WhatsApp Image 2025-05-14 at 01.41.18.jpeg';
import bg33 from './images/WhatsApp Image 2025-05-14 at 11.59.48.jpeg';
import bg34 from './images/WhatsApp Image 2025-05-14 at 01.41.05.jpeg';
import bg35 from './images/WhatsApp Image 2025-05-14 at 01.42.20.jpeg';


import Images  from  './Students';
const sections = [

  {
    id: 'People',
    title: 'الطلاب',
    content: `
      <div style="direction: rtl; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; padding: 1rem;">
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-bottom: 0.75rem; background: #fdf6e3; padding: 0.75rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <strong style="color: #8b5e3c; font-size: 1.1rem;"> أحمد حسني السيد عبد الهادي</strong>
          </li>
          <li style="margin-bottom: 0.75rem; background: #fdf6e3; padding: 0.75rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <strong style="color: #8b5e3c; font-size: 1.1rem;"> باسم محمد فتحي محمد</strong>
          </li>
          <li style="margin-bottom: 0.75rem; background: #fdf6e3; padding: 0.75rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <strong style="color: #8b5e3c; font-size: 1.1rem;"> احمد هاني سيد محمود</strong>
          </li>
          <li style="margin-bottom: 0.75rem; background: #fdf6e3; padding: 0.75rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.05);">
            <strong style="color: #8b5e3c; font-size: 1.1rem;"> السيد سليمان السيد سليمان</strong>
          </li>
        </ul>
        <a href="/#/students"
   style="display: inline-flex; align-items: center; text-decoration: none; color: #8b5e3c; font-weight: bold; font-size: 1.1rem; margin-top: 1rem;">
  <span>عرض صور الطلاب</span>
  <span style="display: inline-block; margin-right: 0.5rem;">←</span>
</a>
      </div>
    `
  },
  
  

    {
        id: 'Category',
        title: 'الفهرس',
        content: `<style>
       
        
        .title {
            text-align: center;
            font-size: 22px;
            font-weight: bold;
            margin-bottom: 25px;
            border-bottom: 1px solid #000;
            padding-bottom: 5px;
        }
        
        .toc {
            width: 100%;
        }
        
        .toc-item {
            padding: 6px 0;
            text-align: right;
        }
        
        .subtitle {
            font-weight: bold;
            margin-top: 15px;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    
    <div class="toc">
        <div class="subtitle">محتويات البحث</div>
        
        <div class="toc-item">المقدمة</div>
        <div class="toc-item">منطقة سيلا</div>
        <div class="toc-item">منطقة أبجيج</div>
        <div class="toc-item">منطقة اللاهون</div>
        <div class="toc-item">منطقة هوارة</div>
        <div class="toc-item">منطقة بيهمو</div>
        <div class="toc-item">منطقة مدينة ماضي</div>
        <div class="toc-item">منطقة قصر الصاغة</div>
        <div class="toc-item">منطقة مدينة الفيوم</div>
        <div class="toc-item">منطقة كوم الغراب</div>
        <div class="toc-item">أهم معالم محافظة الفيوم</div>
        <div class="toc-team"> خطط لتطوير الموقع </div>
    </div>
</body>
    `,
    },
    {
        id: 'introduction',
        title: 'مقدمة',
        content: `<div class="research-paper" dir="rtl">
  <header class="paper-header">
    <h1 sytyle="color:"rgb(255, 255, 255)">بحث عن محافظة الفيوم</h1>
  </header>

  <section class="introduction">
    <p class="greeting">السلام عليكم ورحمة الله وبركاته</p>
    <p class="preface">
      أما بعد قام مجموعة من الطلاب بإعداد هذا البحث عن طريق التعاون فيما بينهم سواءا
      بالتحضير أو الكتابه او استحضار الصور وما الى ذلك آملين في نيل درجات التفوق هذا وان شاء الله ولكن أحببنا أن
      نخبركم أن الانسان ليس معصوما من الخطأ وأن هذا البحث تم اعداده عن طريق المراجع فقد حاولنا جاهدين توفير قدر
      جيد من المراجع الهامه والشامله في هذا الباب وان كنا قد أخطانا فنرجو التصحيح وان كنا قد اصبنا فهذا والحمد لله
      ونأمل في أن يعجب البحث سادتكم وأن ينير معرفتكم وأن يسهم في تزويدكم ببعض النقاط.
    </p>
  </section>

  <section class="main-content">
    <div class="section-content">
      <p>
        أمـا بعـد فإن محافظـة الفيـوم نموذجا حيويًا لدراسة مفهوم الاستمرارية الحضارية في الإقليم المصري، حيث تُقدم تسلسلاً طبوغرافيا وأثريًا غنيا يمكن
        من خلاله تتبع أنماط التفاعل المعقدة بين الإنسان وبيئته على امتداد عصور تاريخية مديدة. يشير المصطلح المصري القديم
        "تا-شت" الذي يترجم بـ "أرض البحيرة"، إلى الأهمية البيئية الهيدرولوجية التي ميزت هذه المنطقة منذ أقدم العصور.
      </p>
      <p>
        وتُظهر المعطيات الأثرية أن الفيوم لم تكن مجرد بؤرة استيطان عابرة، بل منطقة ذات كثافة سكانية مستمرة ومتطورة، بدءا
        من مواقع تعود إلى عصور ما قبل الأسرات، مرورا بمراكز حضرية هامة في العصور الفرعونية واليونانية الرومانية، وصولًا إلى
        المراحل المبكرة من الحضارة المسيحية في مصر.
      </p>
      <p>
        يُعزى هذا الاستمرار الحضاري جزئيا إلى الموقع الجغرافي الفريد للفيوم كواحـة داخـل النظـام البيـئي الصـحراوي الغـربي.
        فإحاطتها بالموارد المائية، المتمثلة في بحيرة قارون وشبكة قنوات بحر يوسف المتفرعة من نهر النيل، قـد وفـرت أساسـا
        مستداما للتنمية الزراعية والاستقرار البشري على مر العصور. وقد أدت هذه الميزة البيئية إلى جعل الفيوم نقطة التقاء طبيعية وممرا حيويًا للتجارة والتبادل الثقافي بين وادي النيل والواحات الغربية، مما ساهم في إثراء نسيجها الحضاري. وتؤكد
        الاكتشافات الأثرية، التي تشمل أدوات حجرية ومواقع استيطان مبكرة تعود إلى العصر الحجري الحديث، على الدور الرائد
        الذي لعبته هذه المنطقة في المراحل التكوينية للمجتمعات المستقرة في مصر، مما يجعلها مجالًا خصبا للبحث الأثري الذي
        يسعى إلى فهم طويل الأمد للتطور الحضاري.
      </p>
    </div>
    
    <div class="section-title">
      <h2>إقليم الفيوم: لمحة عامة</h2>
    </div>
    
    <div class="section-content">
      <p>
        يُعد إقليم الفيوم واحدا من أقدم وأهم أقاليم مصر التاريخية، لما يتمتع به من موقع جغرافي فريد وتاريخ عريق يعود إلى عصور
        ما قبل التاريخ. يقع الإقليم في قلب الصعيد الشمالي، جنوب غرب محافظة الجيزة، ويُعدّ جزءا من منخفض الفيوم الذي
        يُغذّى بميـاه نهر النيـل عـبر بحر يوسـف. ويتميـز الإقليم بتركيبـة بيئيـة وجغرافيـة متكاملـة تجمـع بين الصـحراء والواحـات
        والمناطق الزراعية، مما جعله مقصدا للاستقرار البشري منذ آلاف السنين.
      </p>
      <p>
        لقد لعب إقليم الفيوم دورًا مهمًا في التاريخ المصري القديم، حيث كان مركزا زراعيا وتجاريا وحضاريًا مهما خلال عصور
        الفراعنة، خاصة في عصر الدولة الوسطى. وقد أُطلق عليه في تلك الفترة اسم "بر سوبك" نسبة إلى الإله "سوبك" رب
        الماء والتماسيح، الذي كانت له مكانة خاصة في هذا الإقليم نظرا لطبيعته المرتبطة بالماء والبحيرات.
      </p>
      <p>
        وتتنوع آثار الفيوم بين المصرية القديمة، واليونانية الرومانية، والقبطية، والإسلامية، مما يعكس استمرارية الاستيطان
        والتنوع الثقافي والديني في هذا الإقليم عبر العصور. وهذا التنوع الأثري والتاريخي يجعل من الفيوم منطقة مثالية
        للدراسة الأكاديمية، خاصة للباحثين في مجالات الآثار، والتاريخ، والجغرافيا.
      </p>
    </div>
  </section>

  <style>
    .research-paper {
      font-family: "Traditional Arabic", "Amiri", serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      border: 1px solid #e0e0e0;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    }
    
    .paper-header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 2px double #444;
      padding-bottom: 15px;
    }
    
    .paper-header h1 {
      font-size: 28px;
      color:#e0e0e0;
      margin: 0;
      padding: 10px 0;
    }
    
    .greeting {
      font-size: 18px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
    
    .preface {
      padding: 15px;
      border-right: 4px solid #6a89cc;
      margin-bottom: 25px;
      font-size: 16px;
    }
    
    .section-title {
      margin: 30px 0 15px;
      border-bottom: 1px solid #ccc;
    }
    
    .section-title h2 {
      font-size: 22px;
      color: #3c6382;
      margin: 0;
      padding-bottom: 8px;
    }
    
    .section-content {
      padding: 0 10px;
    }
    
    .section-content p {
      text-align: justify;
      margin-bottom: 18px;
    }
    
    @media (max-width: 768px) {
      .research-paper {
        padding: 10px;
      }
      
      .paper-header h1 {
        font-size: 24px;
      }
      
      .section-title h2 {
        font-size: 20px;
      }
    }
  </style>
</div>
    `,
    }, 
    {
        id: 'sela',
        title: 'منطقة سيلا',
        content: `<style>
.archaeological-site {
  font-family: "Traditional Arabic", "Amiri", "Arial", sans-serif;
  line-height: 1.6;
  max-width: 950px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #e0d8c0;
  border-radius: 8px;
  box-shadow: 0 3px 10px rgba(0,0,0,0.1);
  color: #333;
  background-color: #fcfaf5;
}

.site-header {
  text-align: center;
  margin-bottom: 30px;
  border-bottom: 3px double #b5a88c;
  padding-bottom: 20px;
  border-radius: 6px 6px 0 0;
  padding: 20px;
  background-color: #f5f1e6;
}

.site-header h1 {
  font-size: 36px;
  color: #6d4c41;
  margin: 0;
  text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
}

.site-header h2 {
  font-size: 28px;
  color: #8d6e63;
  margin: 10px 0 0;
}

.site-content {
  padding: 0 15px;
}

.article-content h2 {
  font-size: 24px;
  color: #5d4037;
  text-align: center;
  margin: 20px 0 30px;
  padding: 10px 0;
  border-bottom: 1px solid #d7cdb6;
}

.section {
  margin-bottom: 25px;
  padding: 0 10px 15px;
  border-bottom: 1px dashed #d7cdb6;
}

.section:last-child {
  border-bottom: none;
}

.section h3 {
  font-size: 22px;
  color: #7b5e57;
  margin: 15px 0;
  padding-right: 10px;
  border-right: 4px solid #b5a88c;
}

.section p {
  text-align: justify;
  margin-bottom: 15px;
  line-height: 1.7;
  font-size: 18px;
}

.image-gallery {
  margin: 30px 0;
  padding: 20px;
  background-color: #f0ebe0;
  border-radius: 8px;
}

.image-gallery h3 {
  text-align: center;
  color: #6d4c41;
  margin-bottom: 20px;
  font-size: 20px;
}

.gallery-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 15px;
}

.gallery-item {
  width: 30%;
  min-width: 250px;
  margin-bottom: 15px;
  border: 1px solid #d7cdb6;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  background-color: white;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}

.image-caption {
  padding: 10px;
  font-size: 14px;
  text-align: center;
  background-color: #f9f7f1;
  border-top: 1px solid #efe8d8;
}

.references {
  margin-top: 30px;
  padding: 15px;
  background-color: #f5f1e6;
  border-radius: 6px;
}

.references h3 {
  color: #6d4c41;
  border-bottom: 1px solid #d7cdb6;
  padding-bottom: 8px;
}

.references ul {
  list-style-type: square;
  padding-right: 20px;
}

.references li {
  margin-bottom: 8px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .archaeological-site {
    padding: 10px;
  }
  
  .gallery-item {
    width: 100%;
  }
  
  .section h3 {
    font-size: 20px;
  }
  
  .site-header h1 {
    font-size: 26px;
  }
  
  .article-content h2 {
    font-size: 22px;
  }
}
</style>

<div class="archaeological-site" dir="rtl">
  <header class="site-header">
    <h1>منطقة سيلا الأثرية</h1>
    <h2>كنز أثري من عصر بناة الأهرامات</h2>
  </header>

  <section class="site-content">
    <div class="article-content">
      <h2>تضم منطقة الفيوم عدة مواقع أثرية هامة، ولعل أهم هذه المواقع هي سيلا</h2>

      <section class="section">
        <h3>تاريخ سيلا</h3>
        <p>
          تعتبر قرية سيلا واحدة من المواقع الأثرية الهامة، عثر بها على هرم سنفرو الذى سمى قديما بإسم
          القرية وتم تغييره إلى إسمه الحالي منذ ما يقرب من 40 عاما، كما عثر بالقرية على جبانة تعود
          إلى العصر اليوناني الروماني، وآخر الإكتشافات بالقرية، معبد يعود لنهايــة الدولــة القديمــة ونعرف شيئا عن تاريخ هذه المنطقة بعد ذلك إذ عثر على جبانة مسيحية بها الآلاف من البرديات الخاصة بالقداس.
        </p>
        <p>
          تمثل منطقة سيلا أهمية كبرى في فهم تطور العمارة الجنائزية المصرية القديمة، خاصة في فترة الانتقال من عصر المصاطب إلى عصر الأهرامات. وقد كانت المنطقة مأهولة بالسكان منذ عصور ما قبل الأسرات، واستمرت أهميتها حتى العصر المسيحي المبكر، مما يعكس استمرارية الاستيطان البشري في هذه البقعة لآلاف السنين.
        </p>
      </section>

      <section class="section">
        <h3>موقع منطقة سيلا</h3>
        <p>
          تقع منطقة سيلا الأثرية غرب منطقة ميدوم وشمال منطقة اللاهون وذلك فوق أحـد المرتفعـات
          التي تفصل الفيوم عن مجرى نهر النيل. ويتميز موقعها الاستراتيجي بإطلالة فريدة على المناطق المحيطة، مما جعلها موقعاً مثالياً للمنشآت الجنائزية الملكية.
        <p>
          يرتبط موقع سيلا ارتباطاً وثيقاً بالجيولوجيا المحلية للمنطقة، حيث تتوفر الحجارة الجيرية عالية الجودة التي استخدمت في بناء الهرم والمنشآت الأخرى. كما أن موقعها على مرتفع يحميها من فيضانات النيل، وهو ما كان عاملاً مهماً في اختيار المواقع الجنائزية في مصر القديمة.
        </p>
      </section>

      <section class="section">
        <h3>الآثار الموجودة في منطقة سيلا</h3>
        <p>
          يوجد في منطقة سيلا أثر واحد وهو هرم سيلا. ويعتبر هذا الهرم من الآثار الفريدة التي تمثل مرحلة انتقالية في تطور فن العمارة الجنائزية الملكية في مصر القديمة. ورغم بساطة بنائه مقارنة بالأهرامات الأخرى، إلا أنه يعد موقعاً أثرياً بالغ الأهمية لفهم تطور بناء الأهرامات في عصر بداية الدولة القديمة.
        </p>
      </section>

      <section class="section">
        <h3>نسب هرم سيلا</h3>
        <p>
          هذا الهرم يعده أغلب علماء الآثار من بقايا آثار الأسرة الثالثة، وصاحب هـذا الـرأي هـو العـالم
          الألماني "بورخات" Borchardt وذلك لأنه أول من زار هـذا الهـرم، وكتب وصف وشرح للهرم. هناك من يعارض هذا الرأى ومنهم د. أحمد فخرى، حيث يرى أن ليس هناك من سبب
          واضح يدل على نسبة الهرم للأسرة الثالثة، غير أن هذا الهرم قريب من منطقة "هرم ميدوم"،
          وكذلك يبدو من بقاياه أنه شيد ليكون هرما "مدرجاً" مثل أهرام الأسرة الثالثة.
        </p>
        <p>
          لكن ريزنر Reisner يشكك في أن الهرم كان هرماً مدرجاً، حيث يقول عنه "أنه رديم وحوله
          كساء من الحجر، ويتكون من نواة وطبقة واحدة" ويؤرخه فيمـا بين الأسـرة الثانيـة والثالثـة"،
          ويقول كذلك أن هذا البناء من المستحيل أن يقول الإنسان على وجه التأكيد إنه كان مقبرة لأحد الملوك". من ذلك يتضح لنا أن تاريخ هذا الأثر أمر صعب، وخاصة أنه لا يوجد أي أثر للمعبد
          الجنائزي، ولا لطريق صاعد، ولا لمعبد الوادي. لم يسبق لأي أحد أن لاحظ وجود مباني قديمة
          أخرى أو مقابر بالقرب منه، ولكن ربما كان يرجع لعهد الأسرتين الثانية والثالثة.
        </p>
        <p>
          تعتبر مسألة تأريخ هرم سيلا من القضايا المعقدة في علم المصريات، إذ أن افتقار الموقع للنقوش والكتابات يجعل من الصعب تحديد هوية الملك الذي بناه أو الغرض الدقيق من بنائه. وقد أجريت العديد من الدراسات الحديثة باستخدام التقنيات الجيوفيزيائية لمحاولة كشف المزيد من أسرار هذا الهرم الغامض.
        </p>
      </section>

      <section class="section">
        <h3>الوصف المعماري لهرم سيلا</h3>
        <p>
          يبدو هذا الهرم الآن على هيئة مصطبة كبيرة مشيدة من كتل ضخمة من الحجـر الجـيري، يبلـغ
          طول أحد جوانبها ٢٦م، ولا نعرف مقاييس باقي الأضلاع، حيث أنها محاطة بأكوام من الرديم وفي حاجة للحفر المنظم ويبلغ ارتفاعه الحالي حوالي٧ م. ولذلك لا نستطيع معرفة هل كانت هذه
          القاعدة مربعة مثل قواعد باقي الأهرامات أم مستطيلة كمصاطب العصر العتيق ولا نعـرف أي
          شيء عن البناء السفلي للهرم وذلك نتيجة لعدم حفره حتى الآن من قبل أي أثري.
        </p>
        <p>
          ويشبه هـذا الهـرم في تصـميمه مجموعـة من الأهرامـات صـغيرة الحجم منتشـرة في مصـر في الأماكن التالية: الفنتين - إدفو - الكـوم الأحمـر - كـوم أمبـو - أبيـدوس - زاويـة سـلطان. وهذه الأهرامات جميعها ليس لها أية ملحقات ولا يوجـد بهـا حجـرة دفن أو تـابوت أو أثـاث جنـائزي وخالية من النقوش. وقد أثبتت الدراسة التي أجراها المعهد الألماني للآثار بواسطة العالمين كايزر
          ودراير ١٩٨٠ أن هذا الهرم مثل الأهرامات الأخرى الموجودة في الأماكن المذكورة سابقا يرجع
          للأسرة الثالثة.
        </p>
        <p>
          وقد ذكرت تقارير هيئة الآثار بأنه تم الكشف عن لوحتين من الحجر الجيري تحملان اسم الملك
          سنفرو مؤسس الأسرة الرابعة وذلك في شرق الهرم، مما قد يشير إلى علاقة محتملة بين الملك سنفرو وهذا الهرم.
        </p>
        <p>
          تعد تقنية البناء المستخدمة في هرم سيلا موضوعاً للدراسة المستمرة، حيث يمكن أن تلقي الضوء على تطور تقنيات البناء في مصر القديمة خلال فترة الانتقال من الأسرة الثالثة إلى الأسرة الرابعة. ويبدو أن الهرم قد تعرض للتعديل والإضافة خلال فترات تاريخية متعاقبة، مما يجعله وثيقة معمارية فريدة تعكس تطور فن بناء الأهرامات.
        </p>
      </section>

      <section class="section">
        <h3>الأهمية الأثرية والتاريخية لمنطقة سيلا</h3>
        <p>
          تكمن أهمية منطقة سيلا الأثرية في كونها تمثل حلقة وصل بين العمارة الجنائزية في عصر الأسرات المبكرة وبين الأهرامات المتطورة في عصر الدولة القديمة. فهي تقدم أدلة مادية هامة على تطور فن العمارة المصرية القديمة وتقنيات البناء المستخدمة آنذاك.
        </p>
        <p>
          كما أن وجود جبانة تعود إلى العصر اليوناني الروماني وأخرى مسيحية بها آلاف البرديات، يعكس استمرارية أهمية المنطقة عبر العصور التاريخية المختلفة. وهذا التنوع الحضاري يجعل من سيلا موقعاً فريداً يستحق المزيد من الدراسات الأثرية المتعمقة.
        </p>
        <p>
          وتشكل البرديات المسيحية المكتشفة في المنطقة مصدراً ثمينًا لفهم الطقوس المسيحية المبكرة في مصر، وخاصة طقوس القداس، مما يعزز من القيمة التاريخية والدينية للموقع.
        </p>
      </section>

      <section class="section">
        <h3>جهود الحفاظ والترميم</h3>
        <p>
          تواجه منطقة سيلا الأثرية، كغيرها من المواقع الأثرية في مصر، تحديات متعلقة بالحفاظ على آثارها وحمايتها من عوامل التعرية والتدهور. وقد بذلت وزارة الآثار المصرية جهوداً ملحوظة في الحفاظ على هرم سيلا، رغم أن المنطقة لا تزال بحاجة إلى مزيد من الاهتمام والدراسات الأثرية المنظمة.
        </p>
        <p>
          ويعد توثيق وتسجيل الحالة الراهنة للهرم وإجراء عمليات الترميم الضرورية من الأولويات للحفاظ على هذا الأثر الهام. كما أن تنظيم الزيارات السياحية للمنطقة يمكن أن يساهم في التعريف بأهميتها التاريخية والحضارية ودعم جهود الحفاظ عليها.
        </p>
      </section>
    </div>
  </section>
</div>` ,
images: [
    {
        src:bg1,
      description: 'هرم سيلا الأثري، وهو السمة الرئيسية لمنطقة سيلا الأثرية'
    },
    {
      src:bg2,
      description: 'المناظر الطبيعية المحيطة بمنطقة سيلا، تظهر التضاريس الصحراوية'
    }
  ]

    },
    {
        id: 'abjih',
        title: 'منطقة أبجيج',
        content: `<div class="archaeological-site" dir="rtl">
  <header class="site-header">
    <h1> أبجيج</h1>
  </header>

  <section class="site-content">
    <div class="location-section">
      <h3>موقعها</h3>
      <p>تقع أبجيج على بُعد ٣ كم جنوب غرب مدينة الفيوم</p>
    </div>


    <div class="artifacts-section">
      <h3>آثارها</h3>
      <p>
        عُثر بها على مسلة للملك سنوسرت الأول من الجرانيت الوردي تتميز في أنها تختلف عن غيرها
        من المسلات الأخرى، فقمتها ليست هرمية الشكل، بل تستدير من الأمام إلى الخلف فتبدو وكأنها
        لوحة مستطيلة وبها ثقب يبدو أنه كان يثبت به إما تاج أو تمثال إله أو رمز معين.
      </p>
      <p>
        وقد تضمنت سطوحها الخارجية بعض النقوش التي تصور الملك في عدة مناظر مرة بتاج
        الجنوب وأخرى بتاج الشمال أمام عدة آلهة، بعضها يمثل الشمال وبعضها يمثل الجنوب.
      </p>
      <p>
        وتشير النصوص المصاحبة للمناظر إلى بعض الأساطير المعروفة، مثل أسطورة عين شمس
        وأساطير نشأة الكون، وشعائر تأسيس المعبد المعروفة.
      </p>
      <p>
        كما تشير النصوص أيضاً إلى أن سنوسرت الأول أقام هذه المسلة تخليداً لذكرى بدء تحويل أرض
        الفيوم إلى أرض زراعية.
      </p>
      <p>
        وتقع أبجيج عند مدخل الفيوم عن طريق القاهرة ويبلغ ارتفاع المسلة ١٣ متراً ووزنها ١٠٠
        طن، وأشار إليها "بوكوك" عند زيارته للفيوم عام ١٧٤٠ م كما قام دكتور عبد الحميد زايد بنشر
        هذه المسلة في حوليات هيئة الآثار المصرية.
      </p>
    </div>
  </section>

  <style>
    .archaeological-site {
      font-family: "Traditional Arabic", "Amiri", "Cairo", sans-serif;
      line-height: 1.6;
      max-width: 900px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f8f5ed;
      border: 1px solid #d9d0b8;
      border-radius: 8px;
      box-shadow: 0 3px 12px rgba(0,0,0,0.12);
      color: #333;
    }
    
    .site-header {
      text-align: center;
      margin-bottom: 30px;
      border-bottom: 3px double #c1b599;
      padding-bottom: 20px;
      background-color: #eee6d3;
      border-radius: 6px 6px 0 0;
      padding: 20px;
    }
    
    .site-header h1 {
      font-size: 36px;
      color: #62492c;
      margin: 0;
      text-shadow: 1px 1px 1px rgba(0,0,0,0.1);
    }
    
    .site-content {
      padding: 0 15px;
    }
    
    .location-section, .artifacts-section {
      margin-bottom: 25px;
      padding: 15px;
      background-color: #fff;
      border-radius: 6px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.05);
    }
    
    h3 {
      font-size: 24px;
      color: #7d5a34;
      border-right: 4px solid #c1b599;
      padding-right: 10px;
      margin-bottom: 15px;
    }
    
    p {
      margin-bottom: 15px;
      line-height: 1.7;
      font-size: 17px;
    }
    
   
    
    
    
    
    
    
    @media (max-width: 768px) {
      .archaeological-site {
        padding: 10px;
      }
      
      .site-header h1 {
        font-size: 28px;
      }
      
      h2 {
        font-size: 22px;
      }
      
      .obelisk-image {
        width: 90%;
      }
    }
  </style>
</div>
    
   
    `,
    images: [
        {
            src:bg3 , 
          description: 'مسلة سنوسرت الاول من ابجيج الي نقلت الي  مدخل مدينة الفيوم'
        },
    ],
    },
    {
        id: 'lahun',
        title: 'منطقة اللاهون الأثرية',
        content: `<style>
       
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 5px;
        }
        h4 {
            color: #8B4513;
            text-align: center;
            border-bottom: 2px solid #DEB887;
            padding-bottom: 10px;
        }
        h3 {
            color: #A0522D;
        }
        .image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 20px 0;
        }
        .image-box {
            width: 45%;
            margin-bottom: 20px;
            text-align: center;
        }
        .image-box img {
            max-width: 100%;
            border: 5px solid #DEB887;
            box-shadow: 0 0 5px rgba(0,0,0,0.3);
        }
        .image-box figcaption {
            margin-top: 8px;
            font-weight: bold;
        }
        .section {
            margin-bottom: 30px;
        }
        
    </style>
</head>
<body>
    <div class="container">
        <h4>منطقة اللاهون الأثرية وكنوزها</h4>
        
        <div class="section">
            <h3>نبذة عن منطقة اللاهون</h3>
            <p>تعد منطقة اللاهون واحدة من أهم المواقع الأثرية في مصر القديمة، وتقع عند المدخل الشرقي لمنخفض الفيوم وتحديداً جنوب قرية اللاهون الحالية، على بعد نحو 2 كم من مدينة هوارة. وترتبط هذه المنطقة بعصر الدولة الوسطى وبالأخص بعهد الملك سنوسرت الثاني (1878 – 1897) ق.م رابع ملوك الأسرة الثانية عشر.</p>
            <p>ومن المرجح أن كلمة اللاهون (r-ḥnt) ترجع في أصلها إلى الكلمة المصرية القديمة "را – حن"، والتي تعني "فم البحيرة". ولعل أهم آثار هذه المنطقة هو ذلك الهرم الضخم للملك سنوسرت الثاني والمشيد من الطوب اللبن، والمنشآت المحيطة به.</p>
        </div>

        <div class="image-container">
            <div class="image-box">
               
            </div>
            <div class="image-box">
                
            </div>
        </div>

        <div class="section">
            <h3>هرم اللاهون</h3>
            <p>يتميز الهرم بأن نواته الداخلية كلها عبارة عن كتلة من الصخر الطبيعي ارتفاعها حوالي 40 قدم. وقد أشار "بتري" منذ أربعين عاماً في كتابه (اللاهون، كاهون وغراب، ص1) إلى الخطأ الذي وقع فيه "بيدكر" عندما ذكر أن هرم هوارة هو الذي يحوي هذه النواة الصخرية. وقد اختير موقعه بحيث يطل على كل من وادي النيل ومدخل الفيوم.</p>
            <p>أقيم الهرم نفسه من الطوب اللبن مثل هرم "هوارة" وكسي بغطاء من الحجر الجيري. وقد هجر سنوسرت الثاني فكرة تخطيط المدخل من الناحية الشمالية، وابتكر تخطيطاً جديداً يخفي طريق الوصول إلى حجرة المدفن وذلك بحفر بئران عموديان توصلان إلى الحجرة وكلتاهما خارج المبنى الرئيسي للهرم على الجانب الجنوبي منه.</p>
            <p>وهذان البئران أحدهما متصل بالآخر، ويعتبر البئر الرئيسي وهو الأكبر والأكثر بعداً فقد أخفي تحت أرضية إحدى مقابر الأميرات. وقد تم إنزال تابوت الملك عن طريق أكبرهما إلى عمق 12 م، وبعد المرور بعدة ممرات معقدة يمكن الوصول إلى حجرة الدفن. وقد عثر بها على هذا التابوت المصنوع من الجرانيت الوردي، وتم العثور على مائدة قرابين من المرمر موجودة بها.</p>
        </div>

        <div class="section">
            <h3>المعبد الجنائزي</h3>
            <p>يقع المعبد الجنائزي شرقي الهرم ولكن لم يبق منه إلا ما يدل على موضعه، وقد كان في الأصل مزيناً بالرسوم والنقوش، ولكنها تلفت - لم يتبق منها شيء – ويعتقد أنه تم تخريبه بواسطة "رمسيس الثاني" حيث لا تزال إحدى الكتل الحجرية التي أعيد استعمالها تحمل اسم سنوسرت الثاني.</p>
        </div>

        <div class="image-container">
            <div class="image-box">
                
            </div>
            <div class="image-box">
                
            </div>
        </div>

        <div class="section">
            <h3>كنوز اللاهون: مجوهرات الأميرة سات حتحور أيونت</h3>
            <p>تم العثور في الناحية الجنوبية من الهرم على أربع مقابر لأفراد الأسرة المالكة، من بينها مقبرة الأميرة "سات حتحور إيونت" والتي عثر بها على مجموعة رائعة من الحلي، وهي الآن معروضة بالمتحف المصري ومتحف "المتروبوليتان".</p>
            <p>وكانت زيارة "بتري" للاهون للمرة الثانية بصحبة "جاي برينتون" وآخرين سبباً في العثور على كنز الحلي الشهير. وفي عام 1920 قام بزيارة ثالثة أتم فيها تنظيف ممرات الهرم والمجموعة الهرمية تنظيفاً كاملاً، وفي أثناء تنظيف حجرة القربان التي تقع إلى الجنوب من حجرة الدفن عثر على النموذج الوحيد للحية المقدسة التي كانت تثبت على التاج المزدوج - وهي أفعى الكوبرا الذهبية المطعمة بالعقيق والفيروز واللازورد.</p>
            
            <h3>القلادة الصدرية</h3>
            <p>تعد القلادة الصدرية الخاصة بالأميرة سات حتحور أيونت من أروع وأهم نماذج الحلي الملكي في الدولة الوسطى، وهي قلادة صدرية مزخرفة ومطعمة بالأحجار شبه الكريمة والذهب. تم صنع هذه القلادة من ذهب نقي عالي الجودة واستخدم فيها تطعيم دقيق ومذهل بالأحجار الكريمة وتحتوي على تجويفات رفيعة تملأ بالأحجار الملونة أو الزجاج المصهور.</p>
            <p>يظهر اسم الملك سنوسرت الثاني داخل خرطوش ملكي، وفوق الخرطوش يظهر صقر حورس، رمز الحماية وإله الشمس عند المصريين القدماء في إشارة أن الملك محاط برعاية حورس. وعلى جانب الخرطوش توجد آلهة الحماية – نخبت (نسر) وواجيت (حية الكوبرا)، وهما الحاميتان التقليديتان لجنوب وشمال مصر.</p>
            <p>وتوجد أيضا الرموز الآتية: عنخ – واس – جد، وتدل هذه الرموز على الحياة والقوة والاستمرارية الملكية. وتعتبر هذه القلادة تميمة وقائية دفنت مع الأميرة لحمايتها في العالم الآخر.</p>

            <h3>التاج والمقتنيات الأخرى</h3>
            <p>من القطع الأثرية الأخرى تاج الأميرة سات حتحور أيونت، وهو من أندر وأجمل القطع الأثرية المكتشفة في المقبرة. كما عثر في منطقة اللاهون على مقبرة "أني" مهندس سنوسرت. وهذه المقبرة في حالة سيئة، وهي عبارة عن مصطبة كبيرة تقع على قمة تل صغير، ولا تبعد أكثر من نصف ميل غربي الهرم الملكي. وتضم هذه المصطبة أربع حجرات سفلية، وبالنسبة للمقصورة فجزء منها مبني والجزء الآخر منحوت في جانب التل.</p>
        </div>

        
    </div>
</body>` ,

  images: [
        {
            src:bg4,
          description: 'صدرية وقلادة الاميرة سات حتحور ايونت'
        },
        {
            src:bg5,
          description: 'تاج الاميرة سات حتحور ايونت '
        },
        {
            src:bg6,
          description:'هرم اللاهون'
        },
        {
            src:bg7,
          description: 'هرم اللاهون'
        },
    ],
    },
    {
        id: 'hiwara',
        title: 'منطقة هوارة الأثرية',
        content: `<style>
      
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            border-radius: 5px;
        }
        h4 {
            color: #8B4513;
            text-align: center;
            border-bottom: 2px solid #DEB887;
            padding-bottom: 10px;
        }
        h3 {
            color: #A0522D;
            margin-top: 30px;
        }
        .image-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            margin: 20px 0;
        }
        .image-box {
            width: 30%;
            margin-bottom: 20px;
            text-align: center;
        }
        @media (max-width: 768px) {
            .image-box {
                width: 100%;
            }
        }
        
        .section {
            margin-bottom: 30px;
        }
        
    </style>
</head>
<body>
    <div class="container">
        <h4>موقع هوارة الأثري</h4>
        
        <div class="section">
            <h3>موقعها</h3>
            <p>تقع على بعد ٩ كم جنوب شرق مدينة الفيوم. وتضم آثارا هامة هى هرم "أمنمحات الثالث"، ومعبد "اللابيرنث"، ومقبرة "نفرو بتاح"، وجبانات من العصر المتأخر.</p>
        </div>
        
        <div class="image-container">
            <div class="image-box">
               
            </div>
            <div class="image-box">
              
            </div>
            <div class="image-box">
               
            </div>
        </div>

        <div class="section">
            <h3>هرم أمنمحات الثالث</h3>
            <p>شيد هذا الهرم من الطوب اللبن، ثم كسى من الخارج بالحجر الجيرى المجلوب من طرة. وقد عثر على قمة هذا الهرم إلى جواره. ويبلغ ارتفاع الهرم حوالى ٥٨ م، وطول كل ضلع من أضلاعه حوالى ١٠٠ متر. وقد عبر أسلوب بنائه عن براعة المهندس من حيث الحيل الهندسية التى لجأ إليها لتضليل اللصوص، وذلك ببناء عدد كبير من الممرات المعقدة، والتى تؤدى فى النهاية إلى حجرة الدفن، والتى لم تكن مخصصة للملك فقط، بل أيضاً لابنته نفروبتاح"، ولكنها دفنت فيما بعد فى مدفن خاص بها.</p>
            
            <p>يوجد المدخل الأصلى للهرم فى الناحية الجنوبية، وقد نجح "بترى" عام ١٨٨٩ فى دخول الهرم، والوصول إلى حجرة الدفن، والتى تتكون من كتلة واحدة ضخمة من حجر الكوارتز (الحجر الرملى) يصل وزنها إلى ١١٠ طن، وليس لها باب، ولكن لها فتحة بالسقف سدت بكتلة ضخمة تزن حوالى ٤٥ طنا. ورغم ذلك تمكن اللصوص من الوصول إلى حجرة الدفن، ونهبوا أهم ما فيها. أما المعبد الجنائزى فيوجد فى شمال الهرم.</p>
        </div>

        <div class="section">
            <h3>اللابيرنث (قصر التيه)</h3>
            <p>شيد في الناحية الجنوبية من الهرم، وقد أطلق عليه المؤرخ اليونانى "هيرودوت" اسم "اللابيرانت" تشبيها له بقصر "اللابيرانث" الشهير فى كريت. وقد اتخذ سكان المنطقة هذا الأثر كمحجر يأخذون منه ما يحتاجون إليه من أحجار للبناء، وخاصة فى العصر الرومانى، مما أدى إلى اختفاء هذا الأثر تقريباً، فيما عدا بقايا من أسوار وأعمدة من الحجر الجيرى والجرانيتى.</p>
            
            <p>وقد أجمع الكتاب الكلاسيكيون على أن هذا الأثر كان يفوق كل المنشآت المصرية القديمة من حيث المساحة والنقوش والتصميم المعمارى وعدد التماثيل التى كانت قائمة به. وقد ذكر "سترابو" (strabo) أن طول هذا المبنى ٢٠٠ متر، وأن أى زائر لابد أن يضل طريقه بداخله بسبب كثرة ما فيه من غرف وردهات، وبأنه أعظم من كل المبانى اليونانية. كما ذكر أنه كان يتكون من طابقين، وأن عدد غرفه بلغ ١٥٠٠ غرفة.</p>
            
            <p>وقد عثر بأطلال هذا المبنى على تمثال رائع للملك "أمنمحات الثالث" (موجود الآن بالمتحف المصرى، يحمل رقم ٣٨٥). وبالرغم من المحاولات العديدة المتكررة التى قام بها علماء الآثار (ومنهم بترى، وميخالوفسكى، ولويد، وغيرهم) لوضع تصور لشكل المنشأة من خلال وصف الكتَّاب والرحالة، ومما تبقى من أطلال، إلا أنهم وجدوا صعوبة بالغة لتحقيق ذلك.</p>
            
            <p>ومن الواضح أن المبنى قد شيد فى عهد "أمنمحات الثالث"، لكن ربما أكملته ابنته الثانية "سوبك نفرو" آخر ملكات الأسرة الثانية عشرة؛ حيث عثر على اسمها منقوشاً على بعض الكتل الحجرية. وبالإضافة إلى ذلك هناك دلائل تشير إلى استمرار البناء فى هذه المنشأة خلال عصر الانتقال الثانى. ويرجع السبب فى ذلك إلى القدسية التى نالها "أمنمحات الثالث"، مما جعل الملوك الذين خلفوه يسعون لتكريمه بإضافة أجزاء إلى هذه المنشأة.</p>
        </div>

        <div class="section">
            <h3>مقبرة نفرو بتاح</h3>
            <p>في عام ١٩٥٦، قامت مصلحة الآثار بالحفر فى المنطقة الواقعة جنوب شرق الهرم، حيث عثر على مقبرة الأميرة "نفرو بتاح" ابنة "أمنمحات الثالث"، وعثر بها على تابوت كبير من الجرانيت الوردى، وبعض الأوانى الفضية، ومجموعة رائعة من الحلى المصنوعة من الذهب، والأحجار نصف الكريمة، والمحفوظة حالياً بالمتحف المصرى.</p>
        </div>

        <div class="section">
            <h3>الجبانات</h3>
            <p>تحيط بالهرم من الجهة الشمالية والشرقية والغربية مجموعة من الجبانات التى استعملت منذ الأسرة الثانية عشرة، واستمر استعمالها طوال العصر اليونانى الرومانى. وقد عثر فى شمال الهرم على مقابر بعض الموظفين من الدولة الوسطى، وقد نهبت معظمها، كما أعيد استخدام الكثير منها فى العصر المتأخر ابتداء من الأسرة الثالثة والعشرين.</p>
            
            <p>ومن أهم ما عثر عليه بهذه الجبانة الصور الشخصية التى كانت ترسم وتلون ثم توضع على وجوه المومياوات، والمعروفة باسم صور الفيوم، أو وجوه الفيوم. وقد عثر على بعد ٥٠٠ متر شمال شرق الهرم على جبانة للتماسيح المحنطة، والتى ترمز للإله "سوبك" إله المنطقة.</p>
        </div>
    </div>
</body>
   `  , 
   images: [
    {
        src:bg8,
      description: 'هوارة'
    },
    {
        src:bg9,
      description: 'هوارة'
    },
    {
        src:bg10,
      description:'هوارة'
    },
   
],

    },
    {
        id: 'bihmo',
        title: "بيهمو",
        content:` <style>
        :root {
            --primary-color: #8b5d33;
            --secondary-color: #d9bf9a;
            --accent-color: #5e3a1e;
            --text-color: #333;
            --light-bg: #f7f3e9;
            --border-radius: 8px;
            --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
       
     
        
        h4 {
            font-size: 2.5rem;
            margin-bottom: 0.5rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .subtitle {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            color: var(--secondary-color);
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem;
        }
        
        .section {
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            margin-bottom: 2rem;
            overflow: hidden;
        }
        
        .section-header {
            background-color: var(--primary-color);
            color: white;
            padding: 1rem;
            font-size: 1.5rem;
            font-weight: bold;
        }
        
        .section-content {
            padding: 1.5rem;
        }
        
       
        
       
        
       
       
        
        .analysis-steps {
            counter-reset: step-counter;
        }
        
        .step {
            position: relative;
            padding: 1.5rem 1.5rem 1.5rem 3rem;
            margin-bottom: 1.5rem;
            background-color: white;
            border-radius: var(--border-radius);
            box-shadow: var(--box-shadow);
            border-right: 5px solid var(--primary-color);
        }
        
        .step::before {
            counter-increment: step-counter;
            content: counter(step-counter);
            position: absolute;
            right: -1.5rem;
            top: 50%;
            transform: translateY(-50%);
            background-color: var(--primary-color);
            color: white;
            width: 3rem;
            height: 3rem;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
            font-size: 1.5rem;
        }
        
        .data-highlights {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 1.5rem 0;
        }
        
        .highlight-card {
            background-color: var(--secondary-color);
            border-radius: var(--border-radius);
            padding: 1.2rem;
            text-align: center;
        }
        
        .highlight-card h3 {
            color: var(--accent-color);
            margin-bottom: 0.5rem;
            font-size: 1.2rem;
        }
        
        .highlight-card p {
            font-weight: bold;
            font-size: 1.5rem;
            color: var(--accent-color);
        }
        
     
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
            .gallery {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
            
            .data-highlights {
                grid-template-columns: 1fr;
            }
            
            .step {
                padding: 3rem 1rem 1rem 1rem;
            }
            
            .step::before {
                right: 50%;
                top: 0;
                transform: translate(50%, -50%);
            }
        }
    </style>
</head>
<body>
   
    
    <div class="container">
        <div class="section">
            <div class="section-header">موقع بيهمو</div>
            <div class="section-content">
                <p>تقع على بُعد ٧ كم شمال الفيوم وعلى بُعد اربعة اميال ونصف من مدينة الفيوم وعلى نصف ميل من شمال
بيهمو بقوم كومان من الحجر يلفتان النظر باعتبارهما احد المخلفات القليلة التي تنسب بواحد من أعظم
ملوك مصر القديمة امنمحات الثالث.</p>
                
               
                
                <div class="data-highlights">
                    <div class="highlight-card">
                        <h3>المسافة من الفيوم</h3>
                        <p>٧ كم</p>
                    </div>
                    <div class="highlight-card">
                        <h3>الفترة التاريخية</h3>
                        <p>الأسرة الـ ١٢</p>
                    </div>
                    <div class="highlight-card">
                        <h3>الملك</h3>
                        <p>أمنمحات الثالث</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-header">آثار بيهمو</div>
            <div class="section-content">
                <p>يوجد بها اطلال قاعدتين ضخمتين من الحجر الجيري كان يعلو كل منهم تمثال ضخم من حجر الكوارتز
يمثل الملك امنمحات الثالث وهو جالس على العرش.</p>
                <p>يبلغ ارتفاع التمثال بالقاعدة ١٨ متر. تم تزيين جوانب كرسي العرش بعلامة توحيد القطريين تعبيراً عن
وحدة مصر شمالاً وجنوباً.</p>
                <p>اما القاعدة فقد صورت عليها اقاليم مصر وآلهة النيل واطلق اصل المنطقة على هذين التمثالين اسم
( صنم ).</p>
                
              
                
                <div class="data-highlights">
                    <div class="highlight-card">
                        <h3>ارتفاع التمثال</h3>
                        <p>١٨ متر</p>
                    </div>
                    <div class="highlight-card">
                        <h3>مادة التمثال</h3>
                        <p>حجر الكوارتز</p>
                    </div>
                    <div class="highlight-card">
                        <h3>مادة القاعدة</h3>
                        <p>الحجر الجيري</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-header">تحليل علمي للموقع الأثري</div>
            <div class="section-content">
                <div class="analysis-steps">
                    <div class="step">
                        <h3>المرحلة الأولى: تحديد ماهية الآثار</h3>
                        <p>عندما اكتشف هيرودوت الموقع، ظن خطأً أن الآثار كانت هرمين، لكن التحليل الحديث أظهر أنها قواعد لتمثالين ضخمين يمثلان الملك أمنمحات الثالث. كان سوء التفسير ناتجاً عن أن التماثيل كانت مغمورة جزئياً بالماء وكان يظهر منها فقط أجزاء تشبه الهرم من بعيد.</p>
                    </div>
                    
                    <div class="step">
                        <h3>المرحلة الثانية: تحديد الوظيفة</h3>
                        <p>كشف التحليل الأثري الحديث أن هذه التماثيل كانت تعبر عن مدخل الإقليم الجديد الذي أنشأه أمنمحات الثالث، وليست معابد دينية كما اعتقد البعض. كانت تماثيل ملكية تعبر عن السلطة والإنجازات الملكية في مشاريع الري والزراعة التي قام بها الملك في منطقة الفيوم.</p>
                    </div>
                    
                    <div class="step">
                        <h3>المرحلة الثالثة: التأريخ والتوثيق</h3>
                        <p>تم اكتشاف الحقيقة الكاملة في عام ١٨٨٨ عندما كشف بتري بالقرب من الكومين عن بقايا تمثالين ضخمين من الحجر الرملي وعرشين وأجزاء من نقوش تحمل اسم أمنمحات الثالث. أكدت هذه النقوش أن الآثار تعود للأسرة الثانية عشرة في عصر الدولة الوسطى، وتحديداً لفترة حكم أمنمحات الثالث (حوالي ١٨٤٢-١٧٩٨ ق.م).</p>
                    </div>
                    
                    <div class="step">
                        <h3>المرحلة الرابعة: تفسير الأهمية التاريخية</h3>
                        <p>تمثل هذه التماثيل أهمية كبيرة في فهم مشاريع الري والزراعة في مصر القديمة. إقامة هذين التمثالين في هذا المكان شاهداً على اهتمام أمنمحات الثالث بمشروعات الري الكبرى والتي جعلت الفيوم أخصب بقعة في مصر. كما تعكس هذه التماثيل حقبة من أزهى فترات الدولة الوسطى، حيث كان الاستقرار السياسي والاقتصادي قد سمح بإنشاء مثل هذه المشاريع الضخمة.</p>
                    </div>
                </div>
            </div>
        </div>
        
        <div class="section">
            <div class="section-header">الاكتشافات الحديثة</div>
            <div class="section-content">
                <p>اكتشفت الحقيقة في عام ١٨٨٨ عندما كشف بتري بالقرب من الكومين عن بقايا تمثالين ضخمين من
الحجر الرملي وعرشين وأجزاء من نقوش تحمل اسم أمنمحات الثالث وبهذا أصبح من الواضح أن هذين
الكومين هما قاعدتان تحملان هذين التمثالين الضخمين.</p>
                <p>كان ارتفاع كل قاعدة ٢١ قدماً أما قاعدة التمثال المصنوعة من الحجر الرملي كانت ترتفع أربع أقدام. يعلوها
التمثال الجالس على العرش بارتفاع ٣٥ قدم.</p>
                
               
                
                <div class="data-highlights">
                    <div class="highlight-card">
                        <h3>عام الاكتشاف</h3>
                        <p>١٨٨٨</p>
                    </div>
                    <div class="highlight-card">
                        <h3>المكتشف</h3>
                        <p>فليندرز بتري</p>
                    </div>
                    <div class="highlight-card">
                        <h3>ارتفاع كل قاعدة</h3>
                        <p>٢١ قدم</p>
                    </div>
                    <div class="highlight-card">
                        <h3>ارتفاع التمثال</h3>
                        <p>٣٥ قدم</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body><style>
       ` , 

       images: [
       {
            src:bg11,
          description:'بيهمو'
        },
       
    ],
    },
    {
        id: 'madinet-madi',
        title: 'مدينة ماضي',
        content: `<style>
   
    .container {
        max-width: 1000px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        border-radius: 5px;
    }
    h4 {
        color: #8B4513;
        text-align: center;
        border-bottom: 2px solid #DEB887;
        padding-bottom: 10px;
    }
    h3 {
        color: #A0522D;
        margin-top: 30px;
    }
    
    @media (max-width: 768px) {
        .image-box, .image-row .image-box:first-child, .image-row .image-box:last-child {
            width: 100%;
        }
    }
    
    .section {
        margin-bottom: 30px;
    }
    .highlights {
        background-color: #f8f4eb;
        padding: 15px;
        border-right: 4px solid #DEB887;
        margin: 20px 0;
    }
   
</style>
<div class="container">
    <h4>مدينة ماضي الأثرية</h4>
    
    <div class="section">
        <h3>موقعها</h3>
        <p>تقع مدينة ماضي على بعد ٣٥ كم جنوب غرب الفيوم، وتعد من أهم المناطق الأثرية بالمحافظة. تقع بالقرب من قرية أطسا، وسميت بـ "الحديقة الأثرية" لما تحتويه من معابد ومقاصير وطرق احتفالية.</p>
    </div>
    
   

    <div class="section">
        <h4>الاكتشاف والتاريخ</h4>
        <p>تم اكتشاف مدينة ماضي الأثرية بالمصادفة على يد عالم الآثار والبرديات الإيطالي، أكيلي فوليانو، رئيس بعثة ميلانو، عام 1937. وقد بدأ الأثريون الألمان الاهتمام بهذه المنطقة عام ١٩٤٠م، ثم توقف العمل بها بسبب الحرب.</p>
        
        <p>ومنذ عام ١٩٦٦م، بدأت حفائر منظمة بالمنطقة بواسطة بعثة جامعتى "ميلانو" و"بيزا" الإيطاليتين، وأسفرت أعمالهما حتى الآن عن كشف معبد من الدولة الوسطى، وبه إضافات من العصر البطلمي، وعلى معبد صغير من العصر نفسه.</p>
    </div>

    

    <div class="section">
        <h3>معبد الدولة الوسطى</h3>
        <p>تضم مدينة ماضي المعبد الوحيد المتبقي من الدولة الوسطى في مصر، والذي تم تشييده في عهد الملك "أمنمحات الثالث" خلال عامي 1794-1842 قبل الميلاد، ثم استكمل بناؤه فيما بعد الملك "أمنمحات الرابع" خلال عامي 1785-1794 قبل الميلاد.</p>
        
        <p>وهو معبد من الحجر الجيرى، ويتسم ببساطة تصميمه كباقي معابد الدولة الوسطى. يتكون المعبد من صالة أعمدة بها عمودان على شكل حزمة من نبات البردى. وقد صور على جدران الصالة مناظر لطقس "مد الحبل"، أحد مراحل شعائر تأسيس المعبد.</p>
        
        <p>يتبع صالة الأعمدة صالة عرضية على جدرانها مناظر تقديم قرابين لآلهة المعبد، وهم: الإلهة "رننوتت" إلهة الحصاد، والإلهة "إيزيس"، والإله "سوبك".</p>
        
        <p>ويأتي بعد ذلك قدس الأقداس، ويتكون من ثلاث مقاصير. المقصورة الواقعة في الناحية اليسرى مزينة بمناظر تقديم القرابين للإله "سوبك"، وأمامه في الجهة المقابلة يقدم الملك إناء عطور إلى الإلهة "رننوتت" التي تتخذ شكل ثعبان الكوبرا. وكانت هذه المقاصير مخصصة لتماثيل الآلهة. وفي المقصورة الوسطى عثر على بقايا مجموعة تماثيل منها "رننوتت" تتوسط ملكين.</p>
    </div>

    <div class="highlights">
        <p>من الغريب أن النقوش التي عثر عليها كانت تؤكد على عهدين مختلفين، فنقوش الجهة الغربية كانت تحمل اسم الملك "أمنمحات الثالث"، في حين حملت الجهة الشرقية اسم الملك "أمنمحات الرابع".</p>
    </div>

    <div class="section">
        <h3>المعبد البطلمي والإضافات</h3>
        <p>زاد الاهتمام بهذا المعبد في العصر البطلمي، فأضافوا إليه صالة من الناحية الجنوبية، وأضافوا صالة أخرى من الناحية الشمالية. أما البوابات التي تقع أمام صالة الأعمدة فترجع للعصر البطلمي.</p>
        
        <p>وقد نقش على عمودي المدخل المؤدي لصالة الأعمدة أربعة أناشيد دينية للإلهة "إيزيس" باللغة اليونانية، وعليها توقيع مؤلفها "إزيدور". وتقدم هذه الأناشيد الدينية مثالاً هاماً لامتزاج الحضارة المصرية والحضارة اليونانية، فهي في جوهرها مصرية، ولكنها جاءت بأسلوب الشاعر اليوناني "هوميروس"، وهي موجودة الآن بمتحف الإسكندرية.</p>
        
        <p>في عام ١٩٧٧م، كشفت حفائر البعثة الإيطالية عن معبد صغير يرجع للعصر البطلمي مكون من صالتين، ثم قدس الأقداس المكون من مقصورة رئيسية ومقصورتين أخريين.</p>
    </div>

    <div class="section">
        <h3>طريق الكباش</h3>
        <p>تضم المدينة أطول طريق أثري للكباش في مصر، يصل طوله إلى حوالي 336 متراً، وبعرض يصل إلى حوالي سبعة أمتار، وتم تصميمه في عهد الملك "أمنمحات الثالث" في الأسرة الثانية عشرة، وأكمله ابنه "أمنمحات الرابع".</p>
        
        <p>يضم الطريق 23 تمثالاً، يوجد بينهم خمسة تماثيل فريدة من نوعها لأسود وأنثاها تقوم بإرضاع الأشبال من الجانبين لكل تمثال. كما نجد لوحات ترجع إلى العهد الروماني منقوش عليها إهداء "بروتاركوس ابن رودس" الذي قام بإنشاء طريق الكباش بالمدينة، وزوجته "فاميستا" وأبنائه إلى الملكة كليوباترا والملك بطليموس.</p>
    </div>

    <div class="section">
        <h3>القطع الأثرية المكتشفة</h3>
        <p>عثرت البعثة على كثير من الأوستراكا والبرديات الديموطيقية واليونانية، كما عثرت أيضاً على العديد من الأواني الفخارية والعملات والمسارج والأواني الزجاجية والمنسوجات.</p>
        
        <p>كما عثرت البعثة على تمثال نصفي من الحجر الجيري للملك "أمنمحات الثالث" في أحد المنازل التي يرجع تاريخها إلى القرن الأول الميلادي.</p>
    </div>

    <div class="section">
        <h3>تاريخ المدينة</h3>
        <p>استعادت مدينة ماضي الأثرية رونقها خلال العصر الروماني، خاصة بعد أن هجرها سكانها، وعادت الحياة إليها مرة أخرى في القرن الرابع الميلادي، وذلك خلال حكم الإمبراطور "دقلديانوس".</p>
        
        <p>استمر الوضع حتى العصر القبطي عندما استقر السكان في المنطقة الجنوبية وشيدوا كنائس متعددة بالمدينة، وذلك حتى القرن السابع الميلادي، ثم استقر بها العرب من القرن الثامن وهجروها في نهاية القرن الحادي عشر، ولذلك سميت بمدينة ماضي.</p>
    </div>

  
</div>` ,

images: [
    {
         src:bg12,
       description:'مدينة ماضي'
     },
     {
        src:bg13,
        description:'مدينة ماضي'

    },
    {
        src:bg14,
        description:'مدينة ماضي'

    },
    {
        src:bg15,
        description:'مدينة ماضي'

    },
    {
        src:bg16,
        description:'مدينة ماضي'

    },
 ],
    
      
    },
    {
        id: 'Qasr ElSAja',
        title: "قصر الصاغة",
        content: `<style>
   
    .container {
        max-width: 1000px;
        margin: 0 auto;
        background-color: #fff;
        padding: 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.1);
        border-radius: 5px;
    }
    h4 {
        color: #8B4513;
        text-align: center;
        border-bottom: 2px solid #DEB887;
        padding-bottom: 10px;
    }
    h3 {
        color: #A0522D;
        margin-top: 30px;
    }
    
    @media (max-width: 768px) {
        .image-box {
            width: 100%;
        }
    }
    
    .section {
        margin-bottom: 30px;
    }
    .highlights {
        background-color: #f8f4eb;
        padding: 15px;
        border-right: 4px solid #DEB887;
        margin: 20px 0;
    }
   
</style>
<div class="container">
    <h4>قصر الصاغة</h4>
    
    <div class="section">
        <h3>موقعها</h3>
        <p>يقع ضمن مجموعة الفيوم على بعد حوالي 6 كيلومترات شمال بحيرة قارون و8 كيلومترات شمال معبد مدينة ديمة.</p>
    </div>
    
   

    <div class="section">
        <h3>معبد قصر الصاغة</h3>
        <p>يعد معبد قصر الصاغة من أهم المعالم الأثرية في المنطقة، ويعود تاريخه إلى عصر الدولة الوسطى. يتميز بتصميمه المستطيل ذو الأقطاب الخارجية المتصلة، وبصالة القرابين المحاطة بحجرات لوضع تماثيل الآلهة، بالإضافة إلى الحجرة السرية الداخلية المخفية.</p>
        
        <p>تبلغ مساحة المعبد 6.5 × 21.3 متر، وهو صغير وبسيط في تصميمه، يتكون من مستطيل ذو أقطاب خارجية متصلة. يؤدي إلى صالة القرابين والتي يوجد بجوارها الفناء حيث توجد ست حجرات مخصصة لوضع تماثيل الآلهة.</p>
        
        <p>توجد حجرات صغيرة بنيت كمخازن، كما تم العثور على حجرة سرية داخلية مخفية وراء حائط عليه نقوش مربعة.</p>
    </div>

    <div class="section">
        <h3>تاريخ الاكتشاف</h3>
        <p>اكتُشف هذا المعبد في عام 1884 من قبل شويفارت، وأثبتت الدراسات التي قام بها الألمان عام 1970 أن هذا المبنى يرجع إلى عصر الدولة الوسطى نظراً لتشابه تصميمه مع جميع معابد الدولة الوسطى في القاهرة والأقصر والفيوم.</p>
    </div>

    <div class="section">
        <h3>الممارسات الدينية</h3>
        <p>تشير الأدلة إلى أن الكهنة كانوا يشاركون في طقوس دينية وتقديم القرابين، مما يدل على وجود ممارسات دينية وعقائدية فريدة حول هذا المكان.</p>
        
        <p>توجد كتابات منحوتة في أماكن متفرقة من المعبد، وقد تم اكتشاف جبانة تعود للدولة الوسطى في جنوب جبل هامة بالقرب من هذا المعبد.</p>
    </div>

    <div class="highlights">
        <p>يعتبر معبد قصر الصاغة من أقدم المعابد المصرية التي ما زالت محتفظة بأجزاء كبيرة من بنائها الأصلي، ويمثل نموذجاً فريداً للعمارة المصرية القديمة في عصر الدولة الوسطى.</p>
    </div>

</div>`
    },

  
    {
        id: 'fayoum-city',
        title: "مدينة الفيوم",
        content: ` <style>
       
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
       
        h1 {
            margin: 0;
            font-size: 2.5em;
        }
        
      
        
        .divider {
            height: 2px;
            background-color:rgb(233, 109, 0);
            margin: 40px 0;
        }
        
    </style>
</head>
<body>
    

    <div class="container">
        <section>
            <h2>الخلفية التاريخية</h2>
            <p>تأسست مدينة الفيوم كما ذكر ديودور في عهد الملك مينا وهي حالياً (كيمان فارس). وقد ازدهرت هذه المدينة في الأسرة الثانية عشرة نظراً لاهتمام ملوك هذه الأسرة بها وخاصة أمنمحات الثالث الذي اعتبره أهلها إلهاً للفيوم وحامياً لها واستمرت عبادته حتى العصرين اليوناني الروماني.</p>
            
            <p>كيمان فارس هي أصل مدينة الفيوم القديمة "شدت" واسم العاصمة الإقليم الحادي والعشرين من أقاليم مصر العليا، والتي كرست العبادة للإله سوبك التمساح الذي ارتبط بهذا المكان منذ العصر الثيني حتى العصر اليوناني الروماني. كما ارتبط سوبك بحورس باعتباره المنقذ لأبيه حيث قام سوبك بإنقاذ مينا ونقله إلى البر طبقاً للروايات والأساطير القديمة، وظهر هذا الارتباط منذ الأسرة الثانية عشر.</p>

            
        </section>

        <div class="divider"></div>

        <section>
            <h2>الاكتشافات الأثرية</h2>
            <p>تم الكشف عن معابد من جميع العصور كما سبق لعبادة سوبك في مدينته فضلاً عن عناصر معمارية متعددة في مختلف متاحف العالم. وكذلك تماثيل مثل تمثال "سوبك-تخت" الملقب بسنب من عصر الأسرة الثالثة عشرة، وكذلك تمثال جماعي بدون رأس للآلهة باستت وبتاح وحورس "با آخبيتي" (حالياً بالمتحف المصري من العصر البطلمي).</p>
            
            <p>فضلاً عن الجزء العلوي لتمثال الملك أمنمحات الثالث وتمثال آخر لزوجة الملك أمنمحات الأول وجزء علوي لتمثال يمثل إله النيل، ويرجع إلى عهد الملك سنوسرت الثاني (حالياً بمتحف برلين). وكذلك تمثال جماعي للملك تحوتمس الرابع مع أمه الملكة "تي-عا" من نفس المكان. عُثر على جزء من لوحة من حجر الجرانيت الوردي مؤرخة بالعام الخامس والثلاثين من حكم الملك رمسيس الثاني، وظهر عليها اسم سائق العجلة الحربية للملك "خع أم-تري".</p>

           
        </section>

        <div class="divider"></div>

        <section>
            <h2>الأهمية والموقع</h2>
            <p>تقع كيمان فارس في الشمال مباشرة من مدينة الفيوم الحالية، وهي عبارة عن مساحة واسعة من الكيمان، وتبلغ حوالي مائتي فدان. هي بقايا مدينة "شدت" العاصمة القديمة للفيوم، التي عبدت الإله "سوبك" التمساح معبود الإقليم الرئيسي ولذا أسماها الأغريق مدينة "كروكوديلوبولس" أي مدينة التمساح، كما أطلق عليها بطلميوس الثاني اسم زوجته "أرسنوي"، عندما اختار إقليم الفيوم لتنفيذ الكثير من مشروعاته في الري، وأقطع الكثير من أرضه لليونانيين، الذين أقاموا في الإقليم مدناً كثيرة.</p>
            
            <p>ازدهرت المدينة بوجه خاص في عصر الأسرة الثانية عشرة، وأطلالها الحالية من أوسع ما عُرف من بقايا المدن المصرية القديمة. وكان معبد الإله "سوبك" يقع أقصى الشمال من بقايا المدينة، التي زال الكثير من خرائبها بسبب التوسع العمراني، ولم يبق من معبد الدولة الوسطى والحديثة سوى بضعة أعمدة ملقاة هناك، كما عُثر هناك أيضاً على عدد من الحمامات من العصر اليوناني الروماني.</p>
            
            <p>أمدتنا "كيمان فارس" بمجموعة كبيرة من الأواني والمسارج والتماثيل الفخارية والعملات البرونزية، وخرجت من خرائبها أثناء أخذ السباخ مجموعات كبيرة من أوراق البردي اليونانية، تسربت إلى مختلف متاحف العالم.</p>

        </section>

        <div class="divider"></div>

        <section>
            <h2>الأهمية الدينية</h2>
            <p>تدل البقايا الأثرية التي عُثر عليها بالفيوم على أهمية هذه المدينة وعلى استمرارها لفترة طويلة، ومن عناصر معمارية هيلينية وقبطية كذلك بعض القطع الأثرية الصغيرة التي ترجع للعصر اليوناني الروماني مثل العملة والبرديات والتماثيل واللوحات.</p>
            
            <p>وقد عُبد إلى جانب "سوبك" آلهة أخرى، مثل "أمون" و"حور"، كما ذكرت بردية (ديليور) أنه كان يوجد بهذه المنطقة معبد للإلهة "إيزة". وإن البقايا الأثرية التي لا تزال بهذه المنطقة، ومنها عناصر معمارية هيلينية وقبطية، وكذلك بعض القطع الأثرية الصغيرة التي ترجع للعصر اليوناني الروماني (مثل العملة والبرديات والتماثيل واللوحات) تدل على أهمية هذه المدينة، وعلى استمرارها لعصور طويلة.</p>
            
            <p>وقد اهتم علماء الآثار بالتنقيب في هذا المكان حيث كشفوا عن جبانة من العصر المتأخر وحمامات من العصر اليوناني الروماني بها عناصر زخرفية وفسيفساء ومعبد ضخم من العصر الروماني إلى جانب معبد الدولة الوسطى وكذلك قلعة، وقد كشفت الحفائر الحديثة بها عن عناصر زخرفية وفسيفساء.</p>
        </section>
    </div>

    
</body>` ,  

images: [
    {
         src:bg17,
       description:'مدينة الفيوم'
     },
    {
        src:bg18,
        description:'مدينة الفيوم'


    },
    {
        src:bg19,
        description:'مدينة الفيوم'
    },
 ],

    },
    {
        id: 'kom-el-ghorab',
        title: "كوم الغراب",
        content: ` <style>
        
        .container {
            max-width: 1000px;
            margin: 0 auto;
            padding: 20px;
        }
        
        h1 {
            margin: 0;
            font-size: 2.5em;
        }
        
        
        .divider {
            height: 2px;
            background-color: #c3973d;
            margin: 40px 0;
        }
        
        .highlight-box {
            background-color: #f5efdd;
            border-right: 5px solid #c3973d;
            padding: 15px;
            margin: 20px 0;
            border-radius: 5px;
        }
        .discovery-item {
            margin-bottom: 20px;
            padding-bottom: 15px;
            border-bottom: 1px dotted #ccc;
        }
        .discovery-item:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>
   
    <div class="container">
        <section>
            <h2>الموقع والنشأة</h2>
            <p>يقع كوم الغراب في منطقة تقع عند أقصى جنوب مدخل الفيوم في مواجهة اللاهون. وقد عُرفت هذه المنطقة قبل عصر الدولة الحديثة، ولكنها ازدهرت إبان هذه الفترة، خاصة في عهد الملك تحتمس الثالث، حيث عُثر على أطلال معبدين كبيرين من عهد هذا الملك، تبلغ مساحتهما 220 × 240 متر.</p>
            
            <div class="highlight-box">
                <p>تم تأسيس مدينة كوم الغراب على يد الملك تحتمس الثالث ولكنها خُربت لاحقاً في عهد الملك منفتاح. وقد سكنها الأجانب لمدة قرنين ونصف قرن بعد إنشائها، مما يعكس أهميتها كمركز للتبادل الثقافي والحضاري في تلك الفترة.</p>
            </div>

            <div class="image-container">
                <img src="/api/placeholder/400/300" alt="موقع كوم الغراب الأثري">
                <div class="image-caption">منظر عام لموقع كوم الغراب الأثري على مشارف مدينة الفيوم</div>
            </div>
        </section>

        <div class="divider"></div>

        <section>
            <h2>الاكتشافات الأثرية</h2>
            <p>تم العثور على العديد من الآثار الهامة في منطقة كوم الغراب، والتي تشير إلى العلاقات الدولية لمصر القديمة وتاريخ المنطقة الثري:</p>
            
            <div class="discovery-item">
                <h3>رأس الملكة تي</h3>
                <p>من أهم الاكتشافات في المنطقة رأس الملكة "تي" المصنوعة من الأبنوس، والموجودة حالياً في متحف برلين. تُظهر هذه القطعة الفنية المتميزة براعة النحت المصري القديم وتعكس أهمية الملكة تي في التاريخ المصري القديم. يعتقد البعض أن الملكة تي أقامت في هذه المنطقة بعد وفاة زوجها الملك أمنحوتب الثالث، حيث عُثر على العديد من تماثيلها في المنطقة.</p>
            </div>
            
            <div class="discovery-item">
                <h3>الأواني الفخارية الإيجية</h3>
                <p>عُثر بتري في موقع كوم الغراب عام 1889-1890، وكذلك في اللاهون في نفس الفترة، على أوانٍ فخارية أجنبية، وصفها في ذلك الوقت بأنها "إيجية"، والتي عُرفت فيما بعد بأنها "مينوية". يدل وجود هذه الأواني على استيطان أجانب في المنطقة، وربما كانوا من الجنود، كما يشير إلى النشاط التجاري والتبادل الثقافي بين مصر والحضارة المينوية في جزيرة كريت.</p>
            </div>
            
            <div class="discovery-item">
                <h3>القطع الأثرية من عهد رمسيس الثاني</h3>
                <p>عُثر على بعض القطع الأثرية من عهد الملك رمسيس الثاني، مما يدل على استمرار النشاط في المنطقة خلال فترة حكم هذا الملك العظيم.</p>
            </div>

            <div class="image-container">
                <img src="/api/placeholder/400/300" alt="أواني فخارية مينوية">
                <div class="image-caption">نماذج من الأواني الفخارية المينوية التي تم العثور عليها في كوم الغراب</div>
            </div>
        </section>

        <div class="divider"></div>

        <section>
            <h2>العصر البطلمي وما بعده</h2>
            <p>يبدو أنه أُقيمت في كوم الغراب مدينة أخرى في العصر البطلمي، كشف فيها بتري عن مجموعة من التوابيت المصنوعة من الكارتون الذي ثبت عند فحصه أنه يتكون من أوراق من البردي ضُم بعضها إلى بعض بمادة لاصقة في بعض الأحيان وبدون هذه المادة في أحيان أخرى.</p>
            
            <div class="highlight-box">
                <p>عند فصل هذه الأوراق بعضها عن بعض، تبين أنها على جانب كبير من الأهمية إذ أنها أول مجموعة من الوثائق التي ترجع إلى الفترة ما بين 300 - 200 سنة قبل الميلاد.</p>
            </div>
            
            <p>وفي الزاوية الشمالية الشرقية لمنطقة المعابد، توجد قلعة ترجع للأسرة الحادية والعشرين، وتبلغ مساحتها 3980 متر مربع. وتوجد بالمنطقة عدة جبانات ترجع لعصور ما قبل التاريخ وحتى العصر البطلمي.</p>

            <div class="image-container">
                <img src="/api/placeholder/400/300" alt="بقايا التوابيت البردية من العصر البطلمي">
                <div class="image-caption">بقايا التوابيت المصنوعة من أوراق البردي من العصر البطلمي في كوم الغراب</div>
            </div>
        </section>

        <div class="divider"></div>
        
        <section>
            <h2>الاكتشافات الحديثة</h2>
            <p>مما يجدر ذكره أن مس "كاتون تومسون" كشفت في الفيوم عن مخلفات حضارة قديمة ترجع إلى العصر الذي يسبق عصر ما قبل الأسرات في مصر، وتعاصر حضارة البداري التي كشف عنها "برنتون" في الصعيد.</p>
            
            <p>وقد كان أهالي الفيوم الذين تربطهم القرابة بالبداريين يسكنون حول شواطئ البحيرة الكبيرة التي كانت حينذاك تغمر المنخفض إلى ارتفاع 200 قدم فوق مستواه الحالي، كما كانوا يشتغلون بصيد السمك والقنص. وقد بدؤوا أيضاً زراعة وتخزين القمح البري والقمح والشعير وتربية الثيران والضأن والماعز والخنزير.</p>
            
            <p>ومما يدل على ممارستهم التجارة أيضاً وجود محار من البحر الأبيض والبحر الأحمر، مما يشير إلى وجود طرق تجارية نشطة منذ ذلك الوقت القديم.</p>
        </section>

        <div class="divider"></div>
        
        <section>
            <h2>الوصول إلى المنطقة</h2>
            <p>هناك طريق ممتع يوصلنا إلى الفيوم عبر الصحراء من كوم أوشيم، وهذا الطريق يمتد مستقيماً حتى أهرام الجيزة، ويمكن للسيارة السريعة أن تقطع كل المسافة في ساعة ونصف الساعة.</p>
            
            <p>تعتبر منطقة كوم الغراب جزءاً من مجموعة مواقع أثرية هامة في محافظة الفيوم، التي تضم أيضاً مواقع ومناطق أثرية من العصر اليوناني الروماني مثل البريجات، وكوم أوشيم، وكوم الأثل، وقصر البنات، وقصر القارون.</p>
        </section>
    </div>

   
</body>`
    },
    {
        id: 'الفيوم والمعالم',
        title: "اهم معالم الفيوم",
        content: `
  <style>
    :root {
      --primary-color: #1a5276;
      --secondary-color: #d4ac0d;
      --accent-color: #117a65;
      --light-bg: #f9f9f9;
      --dark-bg: #2c3e50;
      --text-light: #ecf0f1;
      --text-dark: #2c3e50;
      --border-radius: 8px;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
    }
    
    
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
   
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    h3 {
      color: var(--primary-color);
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .content-section {
      display: block;
      margin-bottom: 40px;
      animation: fadeIn 0.5s ease-in;
    }
    
    .attraction-card {
      background-color: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      margin-bottom: 30px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .attraction-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    
    .card-image {
      height: 250px;
      background-size: cover;
      background-position: center;
    }
    
    .card-content {
      padding: 20px;
    }
    
    .card-title {
      margin-bottom: 15px;
      border-bottom: 2px solid var(--secondary-color);
      padding-bottom: 10px;
    }
    
    .card-title h3 {
      color: var(--primary-color);
      font-size: 1.5rem;
    }
    
    
    
    
   
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .attraction-card {
        margin-bottom: 20px;
      }
    }
  </style>
</head>
<body>
 
  <div class="container">
    <!-- Natural Wonders Section -->
    <section id="natural" class="content-section">
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>محمية بحيرة قارون</h3>
          </div>
          <div class="arabic-text">
            <p>تعتبر بحيرة قارون بقايا بحيرة موريس القديمة، وهي من أقدم البحيرات الطبيعية في العالم وتاريخياً كانت من أغنى مراكز الصيد. تم إعلان المنطقة محمية طبيعية بموجب قرار رئيس مجلس الوزراء رقم 943 لسنة 1989، والمعدل بالقرار رقم 2954 لسنة 1997، بمساحة إجمالية تبلغ حوالي 1385 كم².</p>
            <p>يضم الجزء الشمالي من البحيرة منطقة جبل قطراني، المشهورة برواسبها الحفرية البحرية والنهرية والقارية التي يعود تاريخها إلى حوالي 40 مليون سنة.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>محمية وادي الريان</h3>
          </div>
          <div class="arabic-text">
            <p>تقع محمية وادي الريان على بعد حوالي 170 كم من القاهرة، جنوب غرب منخفض الفيوم، وهي منخفض عميق من الحجر الجيري الإيوسيني، وتبلغ مساحتها الإجمالية نحو 1759 كم².</p>
            <p>ينخفض مستوى الوادي عن سطح البحر بحوالي 42 متراً، ويشتهر بشلالاته المتعددة وجماله الطبيعي الخلاب، حيث يعتبر بيئة طبيعية للحيوانات البرية والطيور المهاجرة النادرة.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>وادي الحيتان</h3>
          </div>
          <div class="arabic-text">
            <p>يقع وادي الحيتان في الجزء الشمالي الغربي من محمية وادي الريان (في منطقة تسمى "جارة جهنم")، ويحتوي على بقايا متحجرة لحيوانات بحرية منقرضة يرجع تاريخها إلى حوالي 40 مليون سنة.</p>
            <p>يعتبر الوادي متحفاً مفتوحاً، حيث تمثل هذه الأحفوريات أحد أهم المواقع في العالم التي توثق تطور الحيتان من ثدييات برية إلى ثدييات بحرية، وهو ما جعله يدرج ضمن مواقع التراث العالمي لليونسكو.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Historical Sites Section -->
    <section id="historical" class="content-section">
      <h3>المواقع التاريخية</h3>
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>قصر المتاهة</h3>
          </div>
          <div class="arabic-text">
            <p>يقع قصر المتاهة في منطقة هوارة، وقد بناه الملك أمنمحات الثالث ملاصقاً لهرم هوارة. كان يضم 12 قاعة مسقوفة، ستة منها تتجه شمالاً وستة تتجه جنوباً، ولها بوابات متقابلة بشكل مباشر.</p>
            <p>كان البناء بأكمله محاطاً بجدار واحد، ويتميز بنوعين من الغرف - نصفها تحت الأرض والنصف الآخر فوق الأرض - بإجمالي حوالي 300 غرفة. احتوت الغرف السفلية على ضريح الملك وأحزمة التماسيح المقدسة. ولم يتبق من هذا الأثر الهام حالياً سوى بعض آثار أعمدة الطابق العلوي.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>كيمان فارس (مدينة التماسيح القديمة)</h3>
          </div>
          <div class="arabic-text">
            <p>تقع منطقة كيمان فارس في حي الجامعة داخل مدينة الفيوم، وتمتد على مساحة 220 فداناً، مما يجعلها تحتوي على بعض من أوسع بقايا المدن المصرية القديمة. تمثل أصل مدينة الفيوم القديمة التي تأسست في عهد الأسرة الخامسة، وازدهرت في عهد الأسرة الثانية عشرة.</p>
            <p>أنشأ الملك أمنمحات الثالث معبداً للإله سوبك هنا وأطلق عليها اسم "شيدت"، ثم أعيد تسميتها لاحقاً باسم "أرسينوي" تكريماً لزوجته. تعرف المنطقة أيضاً باسم "مدينة التماسيح" نظراً لعبادة الإله سوبك (ذو رأس التمساح) فيها.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>قصر قارون (ديونيسياس)</h3>
          </div>
          <div class="arabic-text">
            <p>يقع قصر قارون على الطرف الجنوبي الغربي لبحيرة قارون، على بعد حوالي 50 كم من مدينة الفيوم، ولا يزال محتفظاً بمعظم تفاصيله وشكله العام. يزين مدخله قرص الشمس، كما تزدان بواباته بنقوش بارزة.</p>
            <p>يعد القصر جزءاً من بقايا مدينة ديونيسياس، التي تأسست في القرن الثالث قبل الميلاد، وازدهرت في العصر الروماني. يعتبر هذا المعبد من أفضل المعابد المحفوظة من العصر اليوناني الروماني في مصر، ويتكون من ثلاثة طوابق مقسمة إلى عدة غرف ودهاليز.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Religious Landmarks Section -->
    <section id="religious" class="content-section">
      <h2>المعالم الدينية</h2>
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>المسجد المعلق (مسجد الأمير سليمان)</h3>
          </div>
          <div class="arabic-text">
            <p>يقع المسجد المعلق (مسجد الأمير سليمان) في وسط مدينة الفيوم، وسمي بـ "المعلق" لارتفاعه عن مستوى سطح الأرض، حيث بُني على ربوة عالية بالإضافة إلى وجود حوانيت أو دكاكين أسفله كان يخصص ريعها للإنفاق على صيانة المسجد والحفاظ عليه.</p>
            <p>يطلق على المسجد أيضاً اسم "أزهر الفيوم" نظراً للتشابه الكبير في تصميم الصحن الداخلي بينه وبين الجامع الأزهر. يعود تاريخ بناء المسجد إلى العصر المملوكي، ويتميز بمنبره الخشبي المزخرف وقبته الرائعة.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>مسجد خوند أصلباي</h3>
          </div>
          <div class="arabic-text">
            <p>بُني مسجد خوند أصلباي عام 1476 ميلادية على يد "خوند أصلباي" زوجة السلطان قايتباي، في زمن سلطنة ابنها السلطان الناصر محمد بن قايتباي. يقع المسجد في أقصى الطرف الشمالي للقسم الغربي من مدينة الفيوم على ضفاف ترعة بحر يوسف.</p>
            <p>من المعالم الأثرية البارزة في المسجد دكة المقرئ والباب والمنبر الذي يمكن فكه وتركيبه، والمطعم بعاج الفيل الذي استورد خصيصاً من الصومال. يتميز المسجد أيضاً بالزخارف الهندسية والنباتية الدقيقة والخط العربي البديع على جدرانه.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>دير العزب (ديموشيه)</h3>
          </div>
          <div class="arabic-text">
            <p>يعود تاريخ دير العزب (ديموشيه) إلى العصر الروماني، ويقع في قرية العزب على بعد حوالي 5 كم جنوب مدينة الفيوم. كان يعرف باسم دير السيدة العذراء مريم والشهيد أبو سيفين، وأعيد تسميته لاحقاً باسم القديس الأنبا إبرآم نظراً لوجود جثمانه فيه.</p>
            <p>يضم الدير كنيسة قديمة وكنيسة حديثة ومزاراً للأنبا إبرآم ومتحفاً للكنيسة. وقد تبقى من هذا الدير القديم كنيسة أثرية تاريخية في الركن الجنوبي الشرقي من الفناء، تعرف باسم كنيسة السيدة العذراء. يعتبر الدير وجهة مهمة للحج المسيحي في مصر.</p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Cultural Attractions Section -->
    <section id="cultural" class="content-section">
      <h2>المعالم الثقافية</h2>
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>سواقي الهدير</h3>
          </div>
          <div class="arabic-text">
            <p>يعود تصنيع سواقي الهدير في الفيوم إلى أكثر من ألفي عام، تحديداً إلى العصر البطلمي، عندما توجه المصريون القدماء إلى الزراعة في الفيوم ذات الطبيعة الطبوغرافية الخاصة.</p>
            <p>تتكون المنطقة من منحدرات تبدأ في الجنوب عند ارتفاع 26 متراً فوق مستوى سطح البحر، وتنتهي عند 44 متراً تحت مستوى سطح البحر في شمال المحافظة بالقرب من شواطئ بحيرة قارون.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>متحف كوم أوشيم "كرانيس"</h3>
          </div>
          <div class="arabic-text">
            <p>يقع متحف كوم أوشيم عند مدخل مدينة كرانيس الأثرية، ويعتبر المتحف الأثري الوحيد بالمحافظة. أنشئ عام 1974، وتم زيادة مساحته في عام 1993، حيث الحق به دوراً علوياً، وفي عـام 2006 أغلـق لمـدة عشـر سنوات، وافتتح مرة أخرى في 3 نوفمبر 2016 بعد أن تم الانتهاء من ترميمه وتطويره وإعادة تأهيله.</p>
            <p>يحتوي المتحف على 320 قطعة أثرية، يحكي من خلالها سيناريو العرض المتحفي تاريخ محافظة الفيوم، وعــادات وتقاليد قاطنيها، منذ أقدم العصور، وكذلك الفكر الديني الذي اعتنقه أهل المحافظة على مر العصور.</p>
          </div>
        </div>
      </div>
      
      <div class="attraction-card">
        <div class="card-content">
          <div class="card-title">
            <h3>متحف الكاريكاتير</h3>
          </div>
          <div class="arabic-text">
            <p>هو أول متحف لفن الكاريكاتير بالشرق الأوسط، ويقع بقرية تونس المطلة على بحيرة قارون، ويعد قبلة لمحبي الفن الساخر وفناني هذا المجال. يضم المتحف حوالي 350 لوحة كاريكاتيرية من بداية القرن العشرين حتى الوقت الحاضر، بمشاركة أربعين فناناً منهم أحمد طوغان، جورج البهجوري، صاروخان، مصطفى حسين.</p>
            <p>معظم اللوحات أصلية، وتعود أقدم رسومات المجموعة لعام 1927. تأسيس المتحف عــام 2009 على يــد الفنان التشكيلي محمد عبلة بمجهود شخصي.</p>
          </div>
        </div>
      </div>
    </section>
</body>
</html>` , 

images: [
    {
        src:bg20,
        description: 'معالم الفيوم'

    },
    {
      src:bg21,
      description: 'معالم الفيوم'

    },
    {
        src:bg22,
        description: 'معالم الفيوم'

    },
    {
        src:bg23,
        description: 'معالم الفيوم'

    },
    {
        src:bg24,
        description: 'معالم الفيوم'

    },
    {
        src:bg25,
        description: 'معالم الفيوم'

    },
    {
        src:bg26,
        description: 'معالم الفيوم'

    },
    {
        src:bg27,
        description: 'معالم الفيوم'

    },
    {
        src:bg28,
        description: 'معالم الفيوم'

    },

 {
        src:bg29,
        description: 'معالم الفيوم'

    },

    {
        src:bg30,
      description: 'معالم الفيوم'
    },
  ]

    },
   
    {
        id: 'refrences',
        title: 'المراجع',
        content: `
<head>
  <style>
    :root {
      --primary-color: #1a5276;
      --secondary-color: #d4ac0d;
      --accent-color: #117a65;
      --light-bg: #f9f9f9;
      --dark-bg: #2c3e50;
      --text-light: #ecf0f1;
      --text-dark: #2c3e50;
      --border-radius: 8px;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
    }
    
   
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
    }
    
    
    
    h1 {
      font-size: 2.5rem;
      margin-bottom: 15px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }
    
    h3 {
      color: var(--primary-color);
      font-size: 2rem;
      margin-bottom: 20px;
      text-align: center;
    }
    
    .references-section {
      background-color: white;
      padding: 20px;
      border-radius: var(--border-radius);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 30px;
    }
    
    .references-section ol {
      margin-right: 30px;
      margin-bottom: 20px;
    }
    
    .references-section li {
      margin-bottom: 15px;
      font-size: 1.1rem;
    }
    
    .gallery-section {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      margin-bottom: 30px;
    }
    
    .gallery-item {
      background-color: white;
      border-radius: var(--border-radius);
      overflow: hidden;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
    
    .gallery-item:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }
    
   
    
    .gallery-caption {
      padding: 15px;
      text-align: center;
      font-size: 1rem;
      color: var(--primary-color);
    }
    
  
    
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @media (max-width: 768px) {
      .gallery-section {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    
    @media (max-width: 480px) {
      .gallery-section {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
 
  
<div class="container">
  <section class="references-section">
    <h3>المراجع</h3>
    <ol>
      <li>إبراهيم سعد. <i>تونا الجليل، درة في صحراء دروه</i>. د.م.</li>
      <li>أحمد بدوي. <i>في موكب الشمس</i>. جزءان. القاهرة، 1946، 1950.</li>
      <li>أحمد فخري. <i>الأهرامات المصرية</i>. القاهرة، 2007.</li>
      <li>Arnold, D. <i>The Pyramid Complex of Senwosret I at Lisht</i>. New York, 1992.</li>
      <li>مواقع الآثار المصرية القديمة (مصر العليا).</li>
      <li>الآثار المصرية في وادي النيل.</li>
      <li>مختار محمد جمال الدين. <i>الآثار المصرية في وادي النيل</i>. القاهرة: الهيئة المصرية العامة للكتاب.</li>
      <li>نور الدين، عبد الحليم. <i>مواقع الآثار المصرية القديمة منذ أقدم العصور وحتى نهاية عصر الأسرات المصرية – الجزء الثاني: مصر العليا</i>. القاهرة: الهيئة المصرية العامة للكتاب.</li>
      <li>مواقع الآثار المصرية القديمة. د. عبد الحليم نور الدين.</li>
      <li>مدن ومواقع الآثار المصرية القديمة. د. تامر فوزي.</li>
      <li>نور الدين عبد الحليم. <i>مواقع أثرية في مصر القديمة – الجزء الثاني: محافظات مصر</i> – محافظة الفيوم.</li>
      <li>حمزة خالد أحمد. <i>مدن ومواقع أثرية في مصر العليا</i>.</li>
    </ol>
  </section>
</div>

</body>
`, 
  
    }, 
{
    id: 'development_plan',
    title: 'خطط لتطوير الموقع',
    content: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خطة تطوير المواقع الأثرية</title>
    <style>
      
        .container {
            max-width: 900px;
            margin: 0 auto;
            background-color: #fff;
            padding: 30px;
            box-shadow: 0 0 20px rgba(139, 69, 19, 0.1);
            border-radius: 10px;
        }
       
        .plan-item {
            background-color: #f8f4eb;
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
            border-right: 5px solid #B87333;
            box-shadow: 0 3px 6px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
        }
        .plan-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0,0,0,0.1);
        }
        .plan-number {
            font-size: 24px;
            font-weight: bold;
            color: #B87333;
            margin-left: 10px;
            display: inline-block;
            min-width: 30px;
        }
        .plan-title {
            font-size: 20px;
            font-weight: bold;
            color: #8B4513;
            display: inline-block;
            margin: 0;
        }
        .plan-content {
            margin-top: 10px;
            line-height: 1.6;
            font-size: 16px;
        }
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            h1 {
                font-size: 26px;
            }
            .plan-title {
                font-size: 18px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        
        <div class="plan-item">
            <span class="plan-number">١</span>
            <h3 class="plan-title">لوحات شرح للموقع</h3>
            <div class="plan-content">
                لوحات شرح تحتوي على معلومات كافية وشاملة للموقع الأثري، تتضمن تفاصيل تاريخية ومعلومات هامة للزائرين بلغات متعددة.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٢</span>
            <h3 class="plan-title">مخطط توجيهي للموقع</h3>
            <div class="plan-content">
                توفير مخطط تفصيلي للموقع عند المدخل لمساعدة الزائرين على فهم تخطيط المكان قبل بدء الزيارة، مع تحديد المعالم الرئيسية ومسارات الزيارة.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٣</span>
            <h3 class="plan-title">تدريب المرشدين السياحيين</h3>
            <div class="plan-content">
                إقامة دورات تدريبية للمرشدين بالموقع الأثري وتنظيم اختبارات دورية لتقييم مستوى المعلومات التي يمتلكها المرشد وقدرته على توصيل وربط المعلومات بطريقة شيقة.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٤</span>
            <h3 class="plan-title">نظام صرف لحماية الموقع</h3>
            <div class="plan-content">
                حفر قنوات أو تركيب مواسير مغطاة للصرف الزراعي لحماية المواقع الأثرية من المياه الجوفية والسطحية، مع مراقبة مستمرة لمستويات المياه حول المواقع.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٥</span>
            <h3 class="plan-title">تدريب الأهالي على الحرف التراثية</h3>
            <div class="plan-content">
                تدريب الأهالي بالمناطق القريبة من المواقع الأثرية على المشغولات والحرف المرتبطة بالتراث للترويج السياحي وخلق فرص اقتصادية للسكان المحليين.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٦</span>
            <h3 class="plan-title">تحسين التواصل مع السياح</h3>
            <div class="plan-content">
                تدريب الأهالي على التعامل مع السياح بشكل لائق لمساعدتهم وتقديم إقامة سعيدة ومريحة لهم في بلدنا الحبيب.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٧</span>
            <h3 class="plan-title">تطوير الطرق والممرات</h3>
            <div class="plan-content">
                رصف وتمهيد الطرق المؤدية للمواقع الأثرية وإنشاء ممرات سياحية داخل الموقع لتسهيل الحركة واستكشاف المكان بسهولة ويسر.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٨</span>
            <h3 class="plan-title">توفير الخدمات الأساسية</h3>
            <div class="plan-content">
                توفير الخدمات داخل الموقع من مظلات للحماية من أشعة الشمس وصناديق للقمامة موزعة بشكل استراتيجي وأماكن للراحة.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">٩</span>
            <h3 class="plan-title">برنامج نظافة دوري</h3>
            <div class="plan-content">
                تنفيذ خطة لتنظيف المواقع بشكل دوري ومنتظم استجابةً لملاحظات السياح الأجانب الذين أبدوا استياءهم من وجود القمامة في المواقع الأثرية.
            </div>
        </div>
        
        <div class="plan-item">
            <span class="plan-number">١٠</span>
            <h3 class="plan-title">تعديل مواعيد العمل</h3>
            <div class="plan-content">
                تعديل ساعات العمل في الظروف الجوية الشديدة حتى يتمكن الزوار من استكمال زيارتهم للمواقع الأثرية بشكل مريح وآمن.
            </div>
        </div>
    </div>
</body>
</html>` ,

},
    
];


const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || !Array.isArray(images) || images.length === 0) {
      setCurrentIndex(0);
      return;
    }
    if (currentIndex >= images.length) {
      setCurrentIndex(images.length - 1);
    }
  }, [images, currentIndex]);

  const goToNext = () => {
    if (!images || !Array.isArray(images) || images.length === 0) return;
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    if (!images || !Array.isArray(images) || images.length <= 1) return;

    const interval = setInterval(() => {
      goToNext();
    }, 3000); 
    return () => clearInterval(interval);
  }, [currentIndex, images]);

  if (!images || !Array.isArray(images) || images.length === 0) return null;

  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <div style={{ maxWidth: '100%', margin: '0 auto' }}>
      <div
        style={{
          position: 'relative',
          marginBottom: '0.75rem',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <img
          src={currentImage.src || currentImage}
          alt={`Slide ${currentIndex + 1}`}
          style={{
            maxWidth: '100%',
            maxHeight: '400px',
            width: 'auto',
            height: 'auto',
            objectFit: 'contain',
            borderRadius: '0.5rem',
            display: 'block',
            margin: '0 auto',
          }}
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x400.png?text=Image+Failed+to+Load';
            e.target.alt = 'Image failed to load';
          }}
        />
      </div>
      <div style={{ textAlign: 'center', padding: '0.5rem' }}>
        <p style={{ color: '#1f2937' }}>
          {currentImage.description || `Description for image ${currentIndex + 1}`}
        </p>
      </div>
    </div>
  );
};


const Header = ({ toggleMenu, menuOpen }) => {
  const headerStyle = {
    backgroundColor: 'var(--color-amber-700)', // Updated to use CSS variable
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  };

  const buttonStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'var(--color-amber-600, #a05c14)', // Fallback to original color
    color: 'white',
    border: 'none',
    padding: '0.4rem 0.8rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  const buttonHoverStyle = {
    backgroundColor: 'var(--color-amber-500, #b96b1e)', // Fallback to original hover color
  };

  const labelStyle = {
    fontFamily: 'Arial, sans-serif',
    fontSize: '1.1rem',
  };

  const imageStyle = {
    display: 'block',
    maxWidth: '100%',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  return (
    <header style={headerStyle}>
      <button
        onClick={toggleMenu}
        aria-label={menuOpen ? 'Close Index Fayoum' : 'Open Index Fayoum'}
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.currentTarget.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.currentTarget.style, buttonStyle)}
      >
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
        <span style={labelStyle}>{menuOpen ? 'إغلاق الفهرس' : 'فهرس الفيوم'}</span>
      </button>

      <img src={bg31} alt="آثار الفيوم التاريخية" style={imageStyle} />
    </header>
  );
};
const InfoView = ({ sectionData }) => {
    if (!sectionData) {
        return <div>لا توجد بيانات متاحة للقسم.</div>;
    }

    const formatText = (text) => {
        if (!text || typeof text !== 'string') return '';
        return text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-amber-800">$1</strong>');
    };

    return (

      
        <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg">
                
                <p dangerouslySetInnerHTML={{ __html: formatText(sectionData.content) }} />
            </div>

            {sectionData.externalLinks && sectionData.externalLinks.length > 0 && (
                <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-bold mb-2 flex items-center">
                        <ExternalLink size={18} className="ml-2" />
                        روابط خارجية
                    </h3>
                    <ul className="list-disc mr-6">
                        {sectionData.externalLinks.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-amber-800 hover:underline">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const GalleryView = ({ images }) => {
    const [selectedImage, setSelectedImage] = useState(null);

    if (!images || images.length === 0) {
        return <div>لا توجد صور متاحة.</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {images.map((src, index) => (
                <div key={index} className="bg-amber-50 p-2 rounded-lg cursor-pointer" onClick={() => setSelectedImage(src)}>
                    <img
                        src={src}
                        alt={`Gallery image ${index + 1}`}
                        className="w-full h-48 object-cover rounded"
                    />
                </div>
            ))}
            {selectedImage && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Zoomed image" className="max-w-full max-h-full" />
                </div>
            )}
        </div>
    );
};

// المكون الرئيسي للتطبيق
const ArchaeologicalSiteApp = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('info');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const currentSection = sections.find(section => section.id === activeSection);

    return (

      
        <div className="min-h-screen flex flex-col" dir="rtl">
            <Header toggleMenu={toggleMenu} menuOpen={menuOpen} />

            {menuOpen && (
                <div className="mobile-menu bg-amber-700 text-white p-4 md:hidden">
                    <ul className="space-y-2">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    className={`w-full text-right p-2 ${activeSection === section.id ? 'bg-amber-900 rounded' : ''}`}
                                    onClick={() => {
                                        setActiveSection(section.id);
                                        setMenuOpen(false);
                                    }}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            )}



            <div className="main-container flex flex-1 flex-col md:flex-row">
                <aside className="sidebar bg-amber-100 md:w-64 p-4">
                    <h2 className="text-lg font-bold mb-4">المواقع الأثرية</h2>
                    <ul className="space-y-2">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <button
                                    className={`w-full text-right p-2 ${activeSection === section.id ? 'bg-amber-200 rounded font-bold' : ''}`}
                                    onClick={() => setActiveSection(section.id)}
                                >
                                    {section.title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </aside>

                <main className="flex-1 p-4">
                    {currentSection && (
                        <div className="space-y-6">
                            <h2 className="text-2xl font-bold text-amber-900">{currentSection.title}</h2>

                            {currentSection.images && currentSection.images.length > 0 && (
                                <div className="relative">
                                    <ImageCarousel images={currentSection.images} />
                                </div>
                            )}

                            

                            <div className="tab-content mt-4">
                                {activeTab === 'info' && <InfoView sectionData={currentSection} />}
                                {activeTab === 'gallery' && <GalleryView images={currentSection.images} />}
                            </div>
                        </div>
                    )}
                </main>
            </div>

       
            <footer className="bg-amber-900 text-white p-4">
                <p className="text-center mb-2">موقع آثار الفيوم © 2025 - جميع الحقوق محفوظة</p>
                <div className="footer-links flex justify-center space-x-4 space-x-reverse">
                    <a href="#" className="hover:underline">اتصل بنا</a>
                    <a href="#" className="hover:underline">حول الموقع</a>
                    <a href="#" className="hover:underline">المصادر</a>
                    <a href="#" className="hover:underline">خريطة الموقع</a>
                </div>
            </footer>
        </div>
    );
};

// إضافة الأنماط المخصصة للمكونات
const styles = `
.carousel {
    position: relative;
    overflow: hidden;
    border-radius: 8px;
}

.carousel-button {
    z-index: 10;
    cursor: pointer;
    transition: all 0.3s ease;
}

.carousel-button:hover {
    background-color: rgba(230, 0, 0, 0.9);
}

.carousel-indicators {
    z-index: 10;
}
.carousel-indicator {
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 5px;
    cursor: pointer;
}
.carousel-indicator.active {
    background-color: #fff;
}
.tab-navigation {
    display: flex;
}
.tab-button {
    padding: 10px 15px;
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1em;
    color: #333;
}
.tab-button:hover {
    background-color: #f0f0f0;
}
.tab-content {
    padding: 10px;
}
.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.mobile-menu ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 250px;
    background:rgb(146, 64, 14);
    height: 100%;
}

.mobile-menu li {
    border-bottom: 1px solid #ddd;
}

.mobile-menu li:last-child {
    border-bottom: none;
}

.mobile-menu button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color:#f0f0f0;
    text-align: right;
    border: none;
    background: none;
    cursor: pointer;
}


`;

const styleElement = document.createElement('style');
styleElement.textContent = styles;
document.head.appendChild(styleElement);

export default ArchaeologicalSiteApp;