const AboutUs = () => (
  <section>
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="mx-auto max-w-3xl pb-12 text-center md:pb-20">
        <p className="text-4xl font-bold text-gray-950">Meet The Team!</p>
        <h2 className="h2 mb-4"></h2>
        <p className="text-2xl text-gray-600">
          Learn more about the talented individuals who make up our team
        </p>
      </div>
      <div className="mx-auto grid max-w-sm items-start gap-8 lg:max-w-none lg:grid-cols-3 lg:gap-6">
        <div
          className="flex h-full flex-col bg-[#E9F7F5] p-6"
          data-aos="fade-up">
          <div>
            <div className="relative mb-4 inline-flex flex-col">
              <img className="rounded-full" src="profilePics/david_96.png" width={500} height={500} alt="Team Member 01" />
              </div>
          </div>
          <div className="mt-6 border-t border-gray-700 pt-5 text-xl font-medium text-gray-700">
            <cite className="not-italic text-[#84CCBF]">David G.</cite> - <span className="text-[#F0CD6C]">Object Detection Dev</span>
          </div>
        </div>
  
          {/* 2nd team member */}
          <div className="flex h-full flex-col bg-[#E9F7F5] p-6" data-aos="fade-up" data-aos-delay="200">
            <div>
              <div className="relative mb-4 inline-flex flex-col">
                <img className="rounded-full" src="profilePics/jaydin_96.png" width={500} height={500} alt="Team Member 02" />
              </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-5 text-xl font-medium text-gray-700">
              <cite className="not-italic text-[#84CCBF]">Jaydin F.</cite> - <span className="text-[#F0CD6C]"> Object Detection Dev</span>
            </div>
          </div>
  
          {/* 3rd team member */}
          <div className="flex h-full flex-col bg-[#E9F7F5] p-6" data-aos="fade-up" data-aos-delay="400">
            <div>
              <div className="relative mb-4 inline-flex flex-col">
                <img className="rounded-full" src="profilePics/aaron_96.png" width={500} height={500} alt="Team Member 03" />
              </div>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-5 text-xl font-medium text-gray-700">
              <cite className="not-italic text-[#84CCBF]">Aaron S.</cite> - <span className="text-[#F0CD6C]">Frontend Dev</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
  
  export { AboutUs };  