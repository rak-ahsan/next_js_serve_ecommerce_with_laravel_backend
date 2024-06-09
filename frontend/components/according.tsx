import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { ReactNode } from "react"

interface Props {
    title?: string,
    accValue?: any,
    children?: ReactNode
}

export function AccordionDemo({ title, children, accValue }: Props) {
    return (
        <Accordion type="single" collapsible className="w-full" defaultValue={accValue}>
            <AccordionItem value={accValue}>
                <AccordionTrigger >{title}</AccordionTrigger>
                <AccordionContent>
                    {children}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
