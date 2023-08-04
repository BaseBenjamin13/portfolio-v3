import React from 'react';
import { Heading, Stack, useColorModeValue as uCMV } from '@chakra-ui/react';
import GitHubCalendar from 'react-github-calendar';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

function GitHistory() {

    const matches = useMediaQuery('(max-width:600px)');

    return (
        <div className="git-history-container flex flex-row flex-wrap justify-center text-[#dfd9ff] font-medium">

            <Stack paddingTop={20}>
                <Heading
                    fontFamily={"var(--chakra-fonts-mono)"}
                    fontSize={40}
                    marginY={5}
                    className={styles.sectionHeadText}
                    >
                    My GitHub History.
                </Heading>

                <GitHubCalendar
                    fontSize={matches ? 15 : 25}
                    blockSize={15}
                    // blockRadius={5}
                    color="blue"
                    username="basebenjamin13"
                />
                {/* </GitHubCalendar> */}

            </Stack>
        </div>
    )
}

export default SectionWrapper(GitHistory, "");