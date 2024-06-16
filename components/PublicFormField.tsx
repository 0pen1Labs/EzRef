import { FieldType } from "@/utils/FieldType";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

type Params = {
    className?: string
    question?: string
    type: FieldType
    description?: string
    currentIndex: number
    totalItems: number
    onNext: () => void
    onBack: () => void
    onSubmit: () => void
}
function PublicFormField({ className, question, type, description, currentIndex, totalItems, onNext, onBack, onSubmit }: Params) {

    const FieldInput = {
        [FieldType.short]: <Input type="text" className="bg-background"/>,
        [FieldType.long]: <Input type="text" className="bg-background"/>,
        [FieldType.number]: <Input type="number" className="bg-background"/>,
        [FieldType.date]: <Input type="date" className="bg-background"/>,
        [FieldType.file]: <Input type="file" className="bg-background"/>,
    }

    function handleNextAndSubmitClick () {
        if (currentIndex === totalItems - 1) {
            onSubmit();
        } else {
            onNext();
        }
    }

    return (
        <div className={cn(
            "flex flex-col space-y-8 md:w-1/2 w-4/5 items-center justify-center",
            className
        )}>
            <Card className="w-full">
                <CardHeader>
                    <CardTitle>
                        {question}
                    </CardTitle>
                    <CardDescription>
                        {description}
                    </CardDescription>
                </CardHeader>
                
                <CardContent>
                    {FieldInput[type]}
                </CardContent> 
            </Card>
            <div className="w-full flex flex-row justify-between px-6 items-center">
                <Button variant="outline" className="text-foreground/60" onClick={onBack} disabled={currentIndex === 0}> Back </Button>
                <div className="flex flex-row relative items-center justify-center">
                    <span className="text-xs text-foreground/50">{currentIndex+1}</span>
                    <Separator className="w-4 -rotate-45 mt-2"/>
                    <span className="text-xs text-foreground/50 mt-4">{totalItems}</span>
                </div>       
                <Button 
                    className="text-foreground" 
                    variant="outline" 
                    onClick={handleNextAndSubmitClick} 
                > 
                    {currentIndex === totalItems - 1 ? 'Submit' : 'Next'} 
                </Button>
            </div>
        </div>
    );
}

export default PublicFormField;