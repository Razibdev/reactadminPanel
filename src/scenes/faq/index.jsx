import {Box, useTheme, Typography} from '@mui/material';
import Header from '../../components/Header';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from '../../theme';

const FAQ = () =>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return <Box m="20px">
        <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

        <Accordion defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse sequi nesciunt labore culpa? Ipsa sed quis suscipit recusandae qui nulla inventore quod dolorum, dignissimos necessitatibus nobis ad laborum illo.
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question Tow
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse sequi nesciunt labore culpa? Ipsa sed quis suscipit recusandae qui nulla inventore quod dolorum, dignissimos necessitatibus nobis ad laborum illo.
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question 3
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse sequi nesciunt labore culpa? Ipsa sed quis suscipit recusandae qui nulla inventore quod dolorum, dignissimos necessitatibus nobis ad laborum illo.
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question 4
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse sequi nesciunt labore culpa? Ipsa sed quis suscipit recusandae qui nulla inventore quod dolorum, dignissimos necessitatibus nobis ad laborum illo.
            </AccordionDetails>
        </Accordion>


        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography color={colors.greenAccent[500]} variant='h5'>
                    An Important Question 5
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis esse sequi nesciunt labore culpa? Ipsa sed quis suscipit recusandae qui nulla inventore quod dolorum, dignissimos necessitatibus nobis ad laborum illo.
            </AccordionDetails>
        </Accordion>




    </Box>
}

export default FAQ;