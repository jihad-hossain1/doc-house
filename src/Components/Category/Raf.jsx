<div className="hidden md:block">
  <Tabs className={`flex flex-col justify-center items-center`}>
    <TabList className={`grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6`}>
      {/* Orthodonatics 1 */}
      <Tab
        className={`p-3 md:px-6 md:py-4 shadow-md rounded-md flex gap-2 cursor-pointer items-center border border-gray-200`}
      >
        <img
          src={teethIcon}
          className={`object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20`}
          alt=""
        />
        <span className="font-semibold">
          Teeth <br /> Orthodonatics
        </span>
      </Tab>
      {/*Cosmetic Dentisty 2 */}
      <Tab
        className={`p-3 md:px-6 md:py-4 shadow-md rounded-md flex gap-2 cursor-pointer items-center border border-gray-200`}
      >
        <img
          src={cosmeticIcon}
          className={`object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20`}
          alt=""
        />
        <span className="font-semibold">
          Cosmetic <br /> Dentisty
        </span>
      </Tab>
      {/*Teeth Cleaning 3 */}
      <Tab
        className={`p-3 md:px-6 md:py-4 shadow-md rounded-md flex gap-2 cursor-pointer items-center border border-gray-200`}
      >
        <img
          src={teethCleaningIcon}
          className={`object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20`}
          alt=""
        />
        <span className="font-semibold">
          Teeth <br /> Cleaning
        </span>
      </Tab>
      {/*Cavity Protection 4 */}
      <Tab
        className={`p-3 md:px-6 md:py-4 shadow-md rounded-md flex gap-2 cursor-pointer items-center border border-gray-200`}
      >
        <img
          src={cavityIcon}
          className={`object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20`}
          alt=""
        />
        <span className="font-semibold">
          Cavity <br /> Protection
        </span>
      </Tab>
      {/* Pediatric Dental 5 */}
      <Tab
        className={`p-3 md:px-6 md:py-4 shadow-md rounded-md flex gap-2 cursor-pointer items-center border border-gray-200`}
      >
        <img
          src={pediatricIcon}
          className={`object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20`}
          alt=""
        />
        <span className="font-semibold">
          Pediatric <br /> Dental
        </span>
      </Tab>
      {/* Oral Surgery 6 */}
      <Tab
        className={`p-3 md:px-6 md:py-4 shadow-md rounded-md flex gap-2 cursor-pointer items-center border border-gray-200`}
      >
        <img
          src={oralIcon}
          className={`object-cover bg-rose-200 p-4 rounded-md w-2/4 md:w-20`}
          alt=""
        />
        <span className="font-semibold">
          Oral <br /> Surgery
        </span>
      </Tab>
    </TabList>
    {/* teethOrthodontics panel 1*/}
    <TabPanel
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 space-x-2 space-y-2`}
    >
      <BooksTabs items={teethOrthodontics}></BooksTabs>
    </TabPanel>
    {/*panel 2*/}
    <TabPanel
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 space-x-2 space-y-2`}
    >
      <BooksTabs items={cosmeticDentisty}></BooksTabs>
    </TabPanel>
    {/*panel 3*/}
    <TabPanel
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 space-x-2 space-y-2`}
    >
      <BooksTabs items={teethCleaning}></BooksTabs>
    </TabPanel>
    {/* cavity panel 4*/}
    <TabPanel
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 space-x-2 space-y-2`}
    >
      <BooksTabs items={cavity}></BooksTabs>
    </TabPanel>
    {/*panel 5*/}
    <TabPanel
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 space-x-2 space-y-2`}
    >
      <BooksTabs items={pediatricDental}></BooksTabs>
    </TabPanel>
    {/*panel 6*/}
    <TabPanel
      className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 space-x-2 space-y-2`}
    >
      <BooksTabs items={oralSurgery}></BooksTabs>
    </TabPanel>
  </Tabs>
</div>;
