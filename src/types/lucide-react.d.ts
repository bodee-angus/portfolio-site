declare module "lucide-react" {
  import * as React from "react"

  type Icon = React.ForwardRefExoticComponent<
    React.ComponentPropsWithoutRef<"svg"> & React.RefAttributes<SVGSVGElement>
  >

  export const Github: Icon
  export const Linkedin: Icon
  export const Mail: Icon
}
