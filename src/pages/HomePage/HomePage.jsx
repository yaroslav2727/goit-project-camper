import Container from "components/Container/Container";
import { Section, Title, Description, Paragraph, Highlighted } from "./HomePage.module";

const HomePage = () => {
  return (
    <Section>
      <Container>
        <Title>
          Project <Highlighted>Camper</Highlighted>
        </Title>
        <Description>
          <Paragraph>
            <Highlighted>Welcome to Project Camper.</Highlighted> Embark on your ultimate adventure
            with Project Camper! Our platform offers a seamless and stress-free way to explore the
            great outdoors in style and comfort. Whether you're a seasoned road tripper or a
            first-time camper, we have the perfect vehicle to suit your needs.
          </Paragraph>

          <Paragraph>
            <Highlighted>Discover Your Perfect Ride.</Highlighted> Browse through our diverse
            selection of camper vans, RVs, and motorhomes to find the ideal vehicle for your
            journey. From compact campers for solo travelers to spacious RVs for family getaways, we
            have options to accommodate every preference and group size.
          </Paragraph>

          <Paragraph>
            <Highlighted>Easy Booking Process.</Highlighted> Booking your dream camper is quick and
            convenient with Project Camper. Simply select your desired dates, choose your preferred
            vehicle, and complete the reservation process in just a few clicks. Our secure payment
            system ensures peace of mind throughout the booking process.
          </Paragraph>

          <Paragraph>
            <Highlighted>Explore with Confidence.</Highlighted> Rest assured knowing that all our
            rental vehicles undergo thorough maintenance and inspection before each rental. We
            prioritize safety and reliability, so you can focus on creating unforgettable memories
            on the open road.
          </Paragraph>

          <Paragraph>
            <Highlighted>Expert Support.</Highlighted> Our friendly and knowledgeable team is here
            to assist you every step of the way. Whether you need travel tips, technical assistance,
            or recommendations for your itinerary, we're always just a phone call or email away.
          </Paragraph>

          <Paragraph>
            <Highlighted>Hit the Road.</Highlighted> With Project Camper, your next adventure
            awaits. Pack your bags, buckle up, and get ready to experience the freedom of the open
            road like never before. Start planning your journey today!
          </Paragraph>
        </Description>
      </Container>
    </Section>
  );
};

export default HomePage;
