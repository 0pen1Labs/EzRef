"use client"

import { FormSchema } from "@/redux/slices/FormSlice";
import Logo from "./Logo";
import PublicFormField from "./PublicFormField";
import { useState } from "react";
import Feedback from "./Feedback";
import { ThemeSwitcher } from "./ThemeSwitcher";
import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import Footer from "./Footer";

type Params = {
    formStructure: FormSchema[]
}

function PublicResponseForm({ formStructure }: Params) {

    const fields = formStructure.slice(1);
    const [currentField, setCurrentField] = useState(0)
    const formTitle = formStructure[0].title;
    const formDescription = formStructure[0].description;
    
    function handleNext() {
        if(currentField < fields.length) {
            console.log("going next");
            setCurrentField(prev => prev + 1);
        }
    }

    function handleBack() {
        if(currentField > 0) {
            console.log("going back");
            setCurrentField(prev => prev - 1);
        }
    }

    function handleSubmit() {
        console.log("submitted");
    }

    return (
        <div className="flex h-screen w-screen flex-col bg-transparent text-foreground z-50">
            <div className="px-10 md:px-32 py-4 pt-6 text-foreground flex flex-row items-center justify-between">
            <Logo />
            <div className="flex flex-row space-x-4 items-center">
                <Link
                    href="https://github.com/0pen1Labs/RefLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ variant: 'ghost', size: 'icon' })}
                >
                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
                </Link>
                <ThemeSwitcher />
            </div>
            </div>
            <div className="flex h-full w-full flex-col flex-grow items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <div className="text-3xl font-light text-foreground/80">
                        {formTitle}
                    </div>
                    <div className="mt-4 text-lg font-light text-foreground/50">
                        {formDescription}
                    </div>
                </div>
                <PublicFormField
                    className="mt-8 md:mt-14"
                    question={fields[currentField].question}
                    type={fields[currentField].type}
                    description={fields[currentField].description}
                    currentIndex={currentField}
                    totalItems={fields.length}
                    onNext={handleNext}
                    onBack={handleBack}
                    onSubmit={handleSubmit}
                />
            </div>
            <Footer className="bg-transparent"/>
        </div>
    );
}

export default PublicResponseForm;