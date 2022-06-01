import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Text, Box, Button, Link, Container } from "../components/atoms";
import { Card } from "../components/molecules";
import {
  ArrowForward,
  CodeIcon,
  PublicGoodIcon,
  TrustMinimisedIcon,
} from "../components/icons";
import { HeroSection, TwoColumnSection } from "../components/organisms";
import { Navbar } from "../components/molecules/Navbar/Navbar";
import { CreateIcon } from "../components/icons/static-icons/CreateIcon";
import { TestIcon } from "../components/icons/static-icons/TestIcon";
import { RunIcon } from "../components/icons/static-icons/RunIcon";
import { Footer } from "../components/organisms";
import { ObolEcosystem } from "../components/organisms/ObolEcosystem/ObolEcosystem";
import { TeamMemberCard } from "../components/atoms/TeamMemberCard/TeamMemberCard";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Obol ui</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar>
          <Link variant="docs" target="_blank" href="https://docs.obol.tech/">
            Docs
          </Link>
          <Link variant="docs" target="_blank" href="https://blog.obol.tech/">
            Blog
          </Link>
          <Link
            variant="docs"
            target="_blank"
            href="https://jobs.lever.co/obol-tech/"
          >
            Jobs
          </Link>
          <Button
            as="a"
            target="_blank"
            href="https://discord.com/invite/n6ebKsX46w"
            variant="nav"
          >
            Join the Community
          </Button>
        </Navbar>
        <Text css={{ fontWeight: "$bold" }}>Test</Text>
        <h1 className={styles.title}>Welcome to Obol ui</h1>
        <Card
          heading="Heading"
          image="/image-card.png"
          variant="image"
          subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
          link="https://obol.tech"
        />
        <Box css={{ mt: "$xl" }} />
        <Card
          heading="Heading"
          image={<CodeIcon />}
          subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
          link="https://obol.tech"
        />
        <HeroSection
          css={{
            "& #heading-text": {
              width: "80%",
            },
          }}
          heading="Distribute Your Validators"
          content="Create an Obol Cluster solo or with a group using the Distributed Validator Launchpad"
        ></HeroSection>
      </main>
      DV Launchpad
      <HeroSection
        heading="Building Distributed Validators for Ethereum"
        content={
          <>
            The Obol Network is an ecosystem for trust minimized staking that
            allows people to{" "}
            <Text css={{ display: "inline-block" }} color="create" glow>
              create
            </Text>
            ,
            <Text css={{ display: "inline" }} color="test" glow>
              {" "}
              test
            </Text>
            ,
            <Text css={{ display: "inline" }} color="obolGreen" glow>
              {" "}
              run
            </Text>{" "}
            &
            <Text css={{ display: "inline" }} color="coordinate" glow>
              {" "}
              co-ordinate
            </Text>{" "}
            distributed validators
          </>
        }
      >
        <Button>Read the Docs</Button>
      </HeroSection>
      <Container>
        <Text
          css={{ fontWeight: "$bold", lineHeight: "$taller" }}
          size="9"
          color="textLight"
        >
          Our Mission
        </Text>

        <Container layout="row" ghost>
          <Card
            image={<CodeIcon />}
            heading="Open Source"
            subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
            contentAlign="start"
            link="https://obol.tech"
          />
          <Card
            image={<PublicGoodIcon />}
            heading="Public Good"
            subheading="All fee's collected in Obol V1 will be granted through retroactive public goods funding. Long term problems call for regenerative circular economics."
          />
          <Card
            image={<TrustMinimisedIcon />}
            heading="Trust Minimised"
            subheading="Obol is committed to using technology and cryptography to reduce the need to trust any single staking operator. Removing this trusts is a core pillar to keeping stake decentralized."
          />
        </Container>
      </Container>
      <Container alignItems="start" layout="row">
        <Container alignItems="start" ghost layout="row">
          <Container variant="textContent" ghost>
            <Text variant="h3">How Distributed Validators work</Text>
            <Text variant="body">
              Distributed Validators are a technology for distributing the job
              of an Ethereum validator across a cluster of nodes in order to
              improve resilience (safety, liveness, or both) as compared to
              running a validator on a single machine.
            </Text>
          </Container>
          <Card
            image="/dvswork-image1.svg"
            variant="image"
            heading="Traditional Validator Node"
            subheading="Current validators have a single point of failure. Only one validator client can be running and signing messages at any time. If two validators with the same key sign conflicting messages the validator will be slashed."
            link="/index.html"
            contentAlign="start"
          />
          <Card
            image="/dvswork-image2.svg"
            variant="image"
            heading="Distributed Validator Cluster"
            subheading="Distributed Validator Nodes operate as a cluster through a distributed validator middleware client called Charon, which coordinates what every validator will sign, and reconstitutes the individual signatures into a signature for the DV."
            link="/index.html"
            contentAlign="start"
            gradientBg
          />
        </Container>
      </Container>
      <Container alignItems="start" layout="row">
        <Container alignItems="start" ghost layout="row">
          <Container variant="textContent" ghost>
            <Text variant="h3">How Distributed Validators work</Text>
            <Text variant="body">
              Distributed Validators are a technology for distributing the job
              of an Ethereum validator across a cluster of nodes in order to
              improve resilience (safety, liveness, or both) as compared to
              running a validator on a single machine.
            </Text>
          </Container>
          <Card
            image="/dvswork-image1.svg"
            variant="image"
            heading="Traditional Validator Node"
            subheading="Current validators have a single point of failure. Only one validator client can be running and signing messages at any time. If two validators with the same key sign conflicting messages the validator will be slashed."
            link="/index.html"
            contentAlign="start"
          />

          <Card
            image="/dvswork-image2.svg"
            variant="image"
            heading="Distributed Validator Cluster"
            subheading="Distributed Validator Nodes operate as a cluster through a distributed validator middleware client called Charon, which coordinates what every validator will sign, and reconstitutes the individual signatures into a signature for the DV."
            link="/index.html"
            contentAlign="start"
            gradientBg
          />
        </Container>
      </Container>
      <Container layout="row">
        <Card
          image={<CreateIcon />}
          heading="Open Source"
          subheading="The Obol Network will forever be open source and permissionless. The impact of distributed validators lies in their accessibility."
        />

        <Card
          image={<TestIcon />}
          heading="Public Good"
          subheading="All fee's collected in Obol V1 will be granted through retroactive public goods funding. Long term problems call for regenerative circular economics."
        />
        <Card
          image={<RunIcon />}
          heading="Trust Minimised"
          subheading="Obol is committed to using technology and cryptography to reduce the need to trust any single staking operator. Removing this trusts is a core pillar to keeping stake decentralized."
        />
      </Container>
      <Container alignItems="start">
        <Container
          css={{ width: "35%", "@sm": { width: "100%" }, gap: "$2xl" }}
          variant="textContent"
          ghost
        >
          <Text variant="h3">Obol Distributed Validator Cluster</Text>
          <Text variant="body">
            The Obol Network is responsible for fostering the adoption of
            multi-operator validation as a use case for distributed validator
            technology.
          </Text>
          <Text variant="body">
            Obol Clusters are multi operator fault tolerant beacon node clusters
            that enable a number of operators to fail and be repaired, without a
            validator going offline.
          </Text>
        </Container>
        <Container layout="row" variant="card">
          <Box
            css={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              src="/obol-dvc.svg"
              width={387}
              height={317}
              alt="obol dvc"
            />
          </Box>
          <Container css={{ gap: "$2xl" }} variant="textContent" ghost>
            <Text variant="h5">Obol Distributed Validator Cluster</Text>
            <Text variant="body">
              {`Charon is Obol Network's distributed validator client and first step in enabling trustless validation.`}
            </Text>
            <Text variant="body">
              Charon conducts fault tolerant, high-availability validation,
              enabling a group of people to collectively run a validator across
              machines instead of on a single node.
            </Text>
            <Text variant="body">
              The more multi-operator clusters on mainnet the stronger Ethereum
              will become.
            </Text>
            <Link target="_blank" href="https://docs.obol.tech/">
              Learn More about Charon
              <ArrowForward size="md" />
            </Link>
          </Container>
        </Container>
        <Text variant="h4">
          Advantages of an Obol Distributed Validator Cluster
        </Text>
        <Container className="advantages-obol" layout="row" ghost>
          <Card
            image="/advantages-obol/always-online.svg"
            imageWidth="280px"
            imageHeight="137px"
            variant="image"
            heading="Traditional Validator Node"
            subheading="Current validators have a single point of failure. Only one validator client can be running and signing messages at any time. If two validators with the same key sign conflicting messages the validator will be slashed."
          />
          <Card
            image="/advantages-obol/key-security.svg"
            imageWidth="280px"
            imageHeight="137px"
            variant="image"
            heading="Distributed Validator Cluster"
            subheading="Distributed Validator Nodes operate as a cluster through a distributed validator middleware client called Charon, which coordinates what every validator will sign, and reconstitutes the individual signatures into a signature for the DV."
          />
          <Card
            image="/advantages-obol/no-single-operator-failure.svg"
            imageWidth="280px"
            imageHeight="137px"
            variant="image"
            heading="Distributed Validator Cluster"
            subheading="Distributed Validator Nodes operate as a cluster through a distributed validator middleware client called Charon, which coordinates what every validator will sign, and reconstitutes the individual signatures into a signature for the DV."
          />
        </Container>
      </Container>
      <TwoColumnSection
        css={{
          height: 645,
        }}
        preHeading={
          <Text css={{ display: "inline-block" }} color="create" glow>
            CREATE
          </Text>
        }
        heading="Distribute your Validators"
        content={
          <>
            Create an Obol Cluster with a group using the{" "}
            <Text css={{ display: "inline-block" }} color="create" glow>
              distributed validator launchpad.
            </Text>
          </>
        }
        image={{
          basePath: "/assets/twocolumnsection.svg",
        }}
      >
        <Button color="create">Learn More</Button>
      </TwoColumnSection>
      <Box
        css={{
          px: "calc($3xl * 2)",
          py: "calc($2xl * 2)",
          backgroundColor: "$bg03",
          "@sm": { px: "$xl", py: "$2xl" },
        }}
      >
        <Footer />
      </Box>
      <Box
        css={{
          py: "calc($2xl * 2)",
        
          backgroundColor: "$bg03",
          "@sm": { px: "$xl", py: "$2xl" },
        }}
      >
        <ObolEcosystem />
      </Box> 
      <footer className={styles.footer}>
        <a href="https://obol.tech" target="_blank" rel="noopener noreferrer">
          Powered by obol.tech
        </a>
      </footer>
    </div>
  );
};

export default Home;
