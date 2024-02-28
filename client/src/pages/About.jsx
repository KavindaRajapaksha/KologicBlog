import React from "react";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center border border-teal-500 rounded-lg">
        <div>
          <h1 className="text-3xl font font-semibold text-center my-7">
            About KOLOGIC Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6 ">
            <p>
              Welcome to Kologic Blog! This blog was created to serve as a
              platform for sharing insights, knowledge, and expertise across
              various domains including engineering, science, medicine, social
              sciences, and technology. At Kologic, we strive to provide
              valuable content that educates, informs, and inspires our readers.
            </p>

            <p>
              Our team consists of passionate individuals who are dedicated to
              curating and delivering high-quality articles, tutorials, and
              discussions on a wide range of topics. Whether you're a student,
              professional, or enthusiast, there's something for everyone at
              Kologic Blog.
            </p>

            <p>
              We believe in the power of community and encourage active
              participation from our readers. Feel free to leave comments,
              engage in discussions, and share your perspectives on the topics
              covered. Together, we can create a vibrant community of learners
              and thought leaders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
