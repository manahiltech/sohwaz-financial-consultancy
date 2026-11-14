import type { ServiceIconKey } from '../types/content';
import {
  Building2Icon,
  LandmarkIcon,
  LayersIcon,
  BriefcaseIcon,
  ScaleIcon,
  ShieldCheckIcon,
  CpuIcon,
  UsersRoundIcon
} from 'lucide-react';

const icons = {
  realEstate: Building2Icon,
  treasury: LandmarkIcon,
  portfolio: LayersIcon,
  financing: BriefcaseIcon,
  restructuring: ScaleIcon,
  compliance: ShieldCheckIcon,
  it: CpuIcon,
  hr: UsersRoundIcon
};

type ServiceIconProps = {icon: ServiceIconKey;className?: string;};

export function ServiceIcon({ icon, className = 'h-5 w-5' }: ServiceIconProps) {
  const Icon = icons[icon];
  return <Icon className={className} strokeWidth={1.5} aria-hidden="true" />;
}
