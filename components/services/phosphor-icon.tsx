"use client"

import type { IconProps } from "@phosphor-icons/react"
import {
  ArrowClockwise,
  Baby,
  BookOpen,
  Briefcase,
  Buildings,
  Car,
  Check,
  Circle,
  Clipboard,
  ClipboardText,
  Coins,
  CurrencyDollar,
  EnvelopeSimple,
  FileDottedIcon,
  FileText,
  FlowArrow,
  Gavel,
  Globe,
  Handshake,
  Heart,
  MapPin,
  Package,
  Path,
  Phone,
  Receipt,
  Scales,
  Scroll,
  Seal,
  ShieldCheck,
  ShieldWarning,
  ShoppingBag,
  Stack,
  TrendDown,
  TrendUp,
  Users,
  Warning,
  WarningCircle,
} from "@phosphor-icons/react"
import type { PhosphorIconName } from "@/lib/phosphor-icon-names"

const phosphorIcons: Record<PhosphorIconName, React.ComponentType<IconProps>> = {
  ArrowClockwise,
  Baby,
  BookOpen,
  Briefcase,
  Buildings,
  Car,
  Check,
  Clipboard,
  ClipboardText,
  Coins,
  CurrencyDollar,
  EnvelopeSimple,
  FileDotted: FileDottedIcon,
  FileText,
  FlowArrow,
  Gavel,
  Globe,
  Handshake,
  Heart,
  MapPin,
  Package,
  Path,
  Phone,
  Receipt,
  Scales,
  Scroll,
  Seal,
  ShieldCheck,
  ShieldWarning,
  ShoppingBag,
  Stack,
  TrendDown,
  TrendUp,
  Users,
  Warning,
  WarningCircle,
}

type PhosphorIconProps = IconProps & {
  name: PhosphorIconName
}

export function PhosphorIcon({ name, ...props }: PhosphorIconProps) {
  const Icon = phosphorIcons[name] ?? Circle

  return <Icon {...props} />
}
