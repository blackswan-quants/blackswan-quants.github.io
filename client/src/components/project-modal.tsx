import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Github } from "lucide-react";
import type { Project } from "@shared/schema";

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-zinc-950 border-zinc-800">
        <DialogHeader>
          <DialogTitle className="text-xl font-medium text-zinc-200">{project.title}</DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          <p className="text-zinc-400 text-sm leading-relaxed">{project.description}</p>
          <div className="flex gap-4 mt-6">
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => window.open(project.pdfUrl, '_blank')}
            >
              <FileText className="w-4 h-4" />
              View PDF
            </Button>
            <Button
              variant="outline"
              className="flex items-center gap-2"
              onClick={() => window.open(project.githubUrl, '_blank')}
            >
              <Github className="w-4 h-4" />
              GitHub Repo
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
