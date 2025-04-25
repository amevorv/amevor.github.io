
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

interface SkillCardProps {
  category: SkillCategory;
}

const SkillCard: React.FC<SkillCardProps> = ({ category }) => {
  return (
    <Card className="h-full hover:shadow-md transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-3">
          <span className="text-3xl">{category.icon}</span>
          <h3 className="text-xl font-semibold">{category.title}</h3>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {category.skills.map((skill) => (
            <li key={skill} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/80">{skill}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
