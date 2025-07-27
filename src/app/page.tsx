import CheckList from "./components/CheckList";
import CTA from "./components/CTA";
import Description from "./components/Description";
import Instructors from "./components/Instructors";
import SectionBlock from "./components/SectionBlock";
import Title from "./components/Title";
import Trailer from "./components/Trailer";
import {
  Star,
  ChevronLeft,
  ChevronRight,
  Play,
  Users,
  Clock,
  Award,
} from "lucide-react";

import { ProductData } from "./types/product";

async function getProduct(): Promise<ProductData> {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      next: { revalidate: 60 }, // ISR: revalidate every 60s
    }
  );

  if (!res.ok) throw new Error("Failed to fetch product");

  return res.json();
}

export default async function Home() {
  const product = await getProduct();
  console.log("productsssssssssssssssssssssssssss", product);

  // const instructors = product.sections.find((s) => s.type === "instructor");
  // const features = product.sections.find((s) => s.type === "features");
  // const pointers = product.sections.find((s) => s.type === "pointers");
  // const exclusive = product.sections.find((s) => s.type === "exclusive");
  // const about = product.sections.find((s) => s.type === "about");

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Header Section */}
      <div className="bg-slate-900  text-white relative">
        <div className="px-4 py-8 mx-auto max-w-7xl">
          <div className="">
            <div className="flex-1 max-w-4xl mx-8">
              <h1 className="text-3xl font-bold mb-4">
                IELTS Course by Munzereen Shahid
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-5 h-5 ${
                        star <= 4
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-400"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">
                  (৮২.৬% শিক্ষার্থী কোর্স শেষ ও রেটিং দিয়েছেন)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm leading-relaxed">
                Academic IELTS এবং General Training IELTS- এর জন্যই প্রয়োজনীয়
                দিক দিয়ে সাজানো দেশের IELTS Instructor এর পরিকল্পিত অভিজ্ঞতা
                কাজে লাগিয়ে তৈরি করেছি আমরা অনেক কষ্টে আমাদের IELTS Course-টি।
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Breadcrumb */}
      <div className="bg-gray-100 py-3">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center text-sm text-gray-600 gap-2">
            <span>হোমপেজ সাইলেবাস সহায়তা</span>
            <span>কোর্সটি কিনে যা পাবেন</span>
            <span>কোর্স সম্পর্কে বিস্তারিত</span>
            <span>কোর্স এক্সক্লুসিভ ফিচার</span>
            <span>এই কোর্স যা আছে</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Instructor Info */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-bold mb-6 text-gray-800">
                কোর্স ইন্সট্রাক্টর
              </h2>

              <div className="flex items-start gap-4">
                <img
                  src="/placeholder.svg?height=80&width=80"
                  alt="Munzereen Shahid"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 mb-1">
                    Munzereen Shahid
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    MSc (English), University of Oxford (UK);
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    BA, MA (English), University of Dhaka;
                  </p>
                  <p className="text-sm text-gray-600">IELTS: 8.5</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Course Preview and Purchase */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
              {/* Video Preview */}
              <div className="relative">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt="Course Preview"
                  className="w-full h-64 object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 hover:bg-opacity-40 transition-opacity">
                  <div className="bg-white rounded-full p-4">
                    <Play className="w-8 h-8 text-gray-800 ml-1" />
                  </div>
                </button>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 border-b">
                <div className="flex gap-2 overflow-x-auto">
                  {[1, 2, 3, 4, 5, 6].map((thumb) => (
                    <img
                      key={thumb}
                      src={`/placeholder.svg?height=60&width=80&query=course thumbnail ${thumb}`}
                      alt={`Thumbnail ${thumb}`}
                      className="w-20 h-15 object-cover rounded border-2 border-transparent hover:border-blue-500 cursor-pointer flex-shrink-0"
                    />
                  ))}
                </div>
              </div>

              {/* Pricing and Purchase */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-gray-800">
                    ৳3850
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ৳5000
                  </span>
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    ২৩% ছাড়
                  </span>
                </div>

                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors mb-6">
                  কোর্স কিনুন
                </button>

                {/* Course Features */}
                <div>
                  <h3 className="font-semibold text-lg mb-4 text-gray-800">
                    এই কোর্স যা আছে
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">
                        কোর্সটি করেছেন ৫০০১+ জন
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">সময় লাগবে ৫০ ঘণ্টা</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">৬৪টি ভিডিও</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
