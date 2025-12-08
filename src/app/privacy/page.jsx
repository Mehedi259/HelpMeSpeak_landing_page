"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  const policySections = [
    {
      title: "1. Information We Collect",
      content: [
        {
          subtitle: "a. Personal Information",
          text: (
            <>
              When you sign in using Google or Apple accounts, we may collect:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Name</li>
                <li>Email address</li>
              </ul>
              We use this information only to provide authentication and app
              functionality.
            </>
          ),
        },
        {
          subtitle: "b. Usage Information",
          text: (
            <>
              We collect app usage data, such as:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Interaction with AI chat</li>
                <li>App features usage</li>
              </ul>
              This information helps us improve app performance and user
              experience.
            </>
          ),
        },
        {
          subtitle: "c. Device Information",
          text: (
            <>
              We may collect device information, such as:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Device model</li>
                <li>Operating system version</li>
                <li>App version</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "2. How We Use Information",
      content: [
        {
          text: (
            <>
              We use the collected information to:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Provide and maintain app services</li>
                <li>Improve and personalize user experience</li>
                <li>Authenticate users securely</li>
                <li>Analyze usage for app improvements</li>
              </ul>
            </>
          ),
        },
      ],
    },
    {
      title: "3. Data Sharing",
      content: [
        {
          text: (
            <>
              We do not sell or rent your personal information to third parties.
              <br />
              We may share limited information with service providers, such as:
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Firebase (for analytics and crash reporting)</li>
                <li>Google Sign-In / Apple Sign-In (for authentication)</li>
              </ul>
              Sharing is only for the purpose of providing app services.
            </>
          ),
        },
      ],
    },
    {
      title: "4. Security",
      content: [
        {
          text: "We implement reasonable technical and organizational measures to protect your data. All sensitive information is transmitted over encrypted channels (HTTPS).",
        },
      ],
    },
    {
      title: "5. Your Choices",
      content: [
        {
          text: "You can choose to not provide personal information, but some app features may be limited. You may also delete your account by contacting us at support@helpmespeak.app.",
        },
      ],
    },
    {
      title: "6. Children’s Privacy",
      content: [
        {
          text: "HelpMeSpeak is not intended for children under 13 years. We do not knowingly collect personal information from children.",
        },
      ],
    },
    {
      title: "7. Updates to This Policy",
      content: [
        {
          text: "We may update this Privacy Policy from time to time. Updates will be posted in the app and take effect immediately.",
        },
      ],
    },
    {
      title: "8. Contact Us",
      content: [
        {
          text: (
            <>
              If you have any questions about this Privacy Policy, please
              contact us at:
              <br />
              Email:{" "}
              <a
                href="mailto:support@helpmespeak.app"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                support@helpmespeak.app
              </a>
            </>
          ),
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen max-w-[1440px] mx-auto w-11/12 py-10 sm:py-16 md:py-20">
      <div className="">
        <header className="mb-8 sm:mb-12 border-b pb-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Privacy Policy – HelpMeSpeak
          </h1>
          <p className="mt-2 text-lg sm:text-xl text-gray-600">
            Effective Date: December, 2025
          </p>
          <p className="mt-4 text-gray-700">
            HelpMeSpeak (“we”, “our”, or “us”) is committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, and share
            information when you use our mobile application HelpMeSpeak.
          </p>
        </header>

        {/* Content Sections */}
        <main className="space-y-8 sm:space-y-10">
          {policySections.map((section, index) => (
            <section
              key={index}
              className=" pl-4 sm:pl-6"
            >
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">
                {section.title}
              </h2>

              <div className="space-y-5">
                {section.content.map((item, itemIndex) => (
                  <div key={itemIndex}>
                    {item.subtitle && (
                      <h3 className="text-xl font-medium text-gray-700 mb-2">
                        {item.subtitle}
                      </h3>
                    )}
                    <p className="text-base text-gray-600 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
