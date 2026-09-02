import { Container, Cylinder, Droplets, FlaskConical, Waves, Wrench, LucideProps } from "lucide-react";

const map = {
  pipe: Cylinder,
  droplets: Droplets,
  wrench: Wrench,
  container: Container,
  flask: FlaskConical,
  drain: Waves,
};

export type CategoryIconName = keyof typeof map;

export default function CategoryIcon({
  name,
  ...props
}: { name: CategoryIconName } & LucideProps) {
  const Icon = map[name];
  return <Icon {...props} />;
}
