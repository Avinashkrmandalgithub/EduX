import React from "react";
import FeatureItem from "./FeatureItem";

import {
  Brain,
  Globe,
  Zap,
  ShieldCheck,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Brain size={24} />,
    title: "AI-Powered Learning",
    description:
      "Adaptive algorithms personalize your journey and ensure optimal learning.",
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    border: "hover:border-orange-500/50",
  },
  {
    icon: <Globe size={24} />,
    title: "Global Community",
    description:
      "Join 50,000+ learners worldwide through collaborations and live chats.",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    border: "hover:border-blue-500/50",
  },
  {
    icon: <Zap size={24} />,
    title: "Instant Feedback",
    description:
      "Real-time assessments help you master concepts faster than ever.",
    color: "text-yellow-500",
    bg: "bg-yellow-500/10",
    border: "hover:border-yellow-500/50",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Verified Credentials",
    description:
      "Earn certificates verified through blockchain for global recognition.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "hover:border-blue-400/50",
  },
  {
    icon: <Users size={24} />,
    title: "Expert Mentorship",
    description:
      "Learn directly from industry experts with 1-on-1 mentorship.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    border: "hover:border-orange-400/50",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Immersive Labs",
    description:
      "Train inside virtual, real-world inspired environments.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "hover:border-purple-400/50",
  },
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, index) => (
        <FeatureItem key={index} feature={feature} />
      ))}
    </div>
  );
};

export default FeatureGrid;
