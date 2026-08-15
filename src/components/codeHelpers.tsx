import { Box } from "@mui/material"
import type { ReactNode } from "react"
import { code } from "../theme/theme"

type StrProps ={
    children: ReactNode
}

export const Str = ({children}: StrProps)=><Box component="span" sx={{color:code.keyword}}>{children}</Box>

export const Kw = ({children}: StrProps)=><Box component="span" sx={{color:code.string}}>{children}</Box>

export const Mark = ({children}: StrProps)=><Box component="span" sx={{color:code.mark}}>{children}</Box>