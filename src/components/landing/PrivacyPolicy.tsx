import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('/iphone-product-5.png')",
          backgroundRepeat: "no-repeat",
          opacity: 0.2,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Content */}
      <div className="relative z-10 px-5 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Privacy Policy
            </h1>
            <p className="mt-4 text-sm text-neutral-400">
              Effective Date: July 2, 2025
            </p>

            <div className="mt-6 space-y-1 text-sm text-neutral-400">
              <p>App Name: Revu+</p>
              <p>Developer: Vedang Kulkarni</p>
            </div>
          </motion.header>

          {/* Body */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="space-y-14 text-neutral-300 leading-relaxed text-base sm:text-[17px]"
          >
            <section>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-3">
                Overview
              </h2>
              <p>
                Revu+ is designed with privacy in mind. We believe your personal
                data belongs to you. That’s why{" "}
                <span className="text-white font-medium">
                  Revu+ does not collect, store, or share any personal
                  information
                </span>
                . All notes and quizzes remain entirely on your device.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-3">
                Data We Do Not Collect
              </h2>
              <p className="mb-4">
                Revu+ does <span className="text-white font-medium">not</span>{" "}
                collect or transmit:
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>Names, email addresses, or IP addresses</li>
                <li>PDF content, notes, or quiz answers</li>
                <li>Device or advertising identifiers</li>
                <li>Location or usage analytics</li>
                <li>Contacts, photos, or files</li>
                <li>Audio recordings or voice data</li>
                <li>Any data linked to your identity</li>
              </ul>
              <p className="mt-4">
                All functionality works{" "}
                <span className="text-white font-medium">entirely offline</span>.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-3">
                Local Data Storage
              </h2>
              <p>
                All data is stored locally on your device using secure Apple
                technologies such as SwiftData and FileManager. You are always
                in control. Deleting the app permanently removes all stored
                data.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-3">
                Third-Party Services
              </h2>
              <p>
                Revu+ does{" "}
                <span className="text-white font-medium">not use</span>{" "}
                third-party analytics, advertising SDKs, or trackers of any kind.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-3">
                Children’s Privacy
              </h2>
              <p>
                Revu+ does not collect data from anyone, including children.
                This makes the app safe for all age groups.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-3">
                Changes to This Policy
              </h2>
              <p>
                If future updates introduce optional features like syncing or
                backup, this policy will be updated transparently. Until then,
                Revu+ remains completely private and offline.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-xl font-medium text-white mb-3">
                Contact
              </h2>
              <p className="mb-2">
                If you have questions about this policy:
              </p>
              <p className="text-white font-medium">Vedang Kulkarni</p>
              <p className="text-neutral-400">vedang_k@icloud.com</p>
            </section>
          </motion.section>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicy;