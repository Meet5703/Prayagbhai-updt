"use client";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box
} from "@chakra-ui/react";

const FAQ = () => {
  // Render the FAQ item
  return (
    <div className="flex mt-10 mb-10 p-10 justify-center md:ml-[10%] md:mr-[10%] flex-col">
      <h1
        className="font-bold text-[#ffa83c] text-lg"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        Frequently Asked Questions
      </h1>
      <p
        className="font-bold text-3xl"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        Read more to know more
      </p>
      <Accordion allowToggle className="w-full">
        <AccordionItem
          w={"full"}
          mt={4}
          data-aos="fade-left"
          data-aos-duration="500"
        >
          <h2 className=" hover:bg-[#d79ff2] bg-[#f6ebfb] border border-[#510b71]">
            <AccordionButton
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box
                _hover={{ backgroundColor: "transparent" }}
                fontWeight={"bold"}
                fontSize={"xl"}
                backgroundColor={"transparent"}
                as="span"
                flex="1"
                textAlign="left"
              >
                What is Pay After Placement ?
              </Box>
              <AccordionIcon
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            backgroundColor={"#f6ebfb"}
            border={"solid #510b71 1px"}
          >
            Our payment structure is designed to ensure that you only pay the
            actual fees once you secure a job. If your package is above 5 LPA,
            the fee is INR 25,000. For packages above 8 LPA, it's INR 35,000,
            and for packages above 10 LPA, it's INR 45,000. Currently you have
            to pay only 8000 Registration fees.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem mt={4} data-aos="fade-right" data-aos-duration="500">
          <h2 className=" hover:bg-[#d79ff2] bg-[#f6ebfb] border border-[#510b71]">
            <AccordionButton
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box
                _hover={{ backgroundColor: "transparent" }}
                fontWeight={"bold"}
                fontSize={"xl"}
                backgroundColor={"transparent"}
                as="span"
                flex="1"
                textAlign="left"
              >
                What is Mode of Teaching ?
              </Box>
              <AccordionIcon
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            backgroundColor={"#f6ebfb"}
            border={"solid #510b71 1px"}
          >
            Our teaching mode is live classes, ensuring interactive learning
            experiences with real-time engagement, personalized instruction, and
            dynamic discussions for optimal understanding and skill development.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mt={4} data-aos="fade-right" data-aos-duration="500">
          <h2 className=" hover:bg-[#d79ff2] bg-[#f6ebfb] border border-[#510b71]">
            <AccordionButton
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box
                _hover={{ backgroundColor: "transparent" }}
                fontWeight={"bold"}
                fontSize={"xl"}
                backgroundColor={"transparent"}
                as="span"
                flex="1"
                textAlign="left"
              >
                Will I Recive a Cirtificate For Completion of Course?
              </Box>
              <AccordionIcon
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            backgroundColor={"#f6ebfb"}
            border={"solid #510b71 1px"}
          >
            Upon completing 80% of the course and projects, you'll receive
            certification.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem mt={4} data-aos="fade-right" data-aos-duration="500">
          <h2 className=" hover:bg-[#d79ff2] bg-[#f6ebfb] border border-[#510b71]">
            <AccordionButton
              backgroundColor={"transparent"}
              _hover={{ backgroundColor: "transparent" }}
            >
              <Box
                _hover={{ backgroundColor: "transparent" }}
                fontWeight={"bold"}
                fontSize={"xl"}
                backgroundColor={"transparent"}
                as="span"
                flex="1"
                textAlign="left"
              >
                Do You Guarantee a Job at the end of the course ?
              </Box>
              <AccordionIcon
                backgroundColor={"transparent"}
                _hover={{ backgroundColor: "transparent" }}
              />
            </AccordionButton>
          </h2>
          <AccordionPanel
            pb={4}
            backgroundColor={"#f6ebfb"}
            border={"solid #510b71 1px"}
          >
            We ensure job readiness through upskilling, resume building, and
            mock call practice. Payment is only required upon securing a job
            with a minimum package of 5 LPA.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

// Export the FAQ component
export default FAQ;
