//so the types folder is to recognize imports that ts doesn't really understand and to treat it,, pretty much  Hey TypeScript, whenever you see a file that ends with .png, don’t freak out just treat it like a generic value (any) and let me import it normally

declare module "*.png" {
  const content: any;
  export default content;
}
