import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '@/components/ui/button';

describe('Button', () => {
  it('renders with default variant and size', () => {
    render(<Button>Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toHaveClass('bg-primary');
    expect(button).toHaveClass('text-primary-foreground');
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('px-4');
    expect(button).toHaveClass('py-2');
  });

  it('renders with destructive variant', () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole('button', { name: 'Delete' });
    expect(button).toHaveClass('bg-destructive');
    expect(button).toHaveClass('text-destructive-foreground');
  });

  it('renders with outline variant', () => {
    render(<Button variant="outline">Submit</Button>);
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toHaveClass('border');
    expect(button).toHaveClass('border-input');
    expect(button).toHaveClass('bg-background');
    expect(button).toHaveClass('hover:bg-accent');
    expect(button).toHaveClass('hover:text-accent-foreground');
  });

  it('renders with secondary variant', () => {
    render(<Button variant="secondary">Cancel</Button>);
    const button = screen.getByRole('button', { name: 'Cancel' });
    expect(button).toHaveClass('bg-secondary');
    expect(button).toHaveClass('text-secondary-foreground');
  });

  it('renders with ghost variant', () => {
    render(<Button variant="ghost">Learn more</Button>);
    const button = screen.getByRole('button', { name: 'Learn more' });
    expect(button).toHaveClass('hover:bg-accent');
    expect(button).toHaveClass('hover:text-accent-foreground');
  });

  it('renders with link variant', () => {
    render(<Button variant="link">Terms of Service</Button>);
    const button = screen.getByRole('button', { name: 'Terms of Service' });
    expect(button).toHaveClass('text-primary');
    expect(button).toHaveClass('underline-offset-4');
  });

  it('renders with small size', () => {
    render(<Button size="sm">Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toHaveClass('h-9');
    expect(button).toHaveClass('rounded-md');
    expect(button).toHaveClass('px-3');
  });

  it('renders with large size', () => {
    render(<Button size="lg">Click me</Button>);
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button).toHaveClass('h-11');
    expect(button).toHaveClass('rounded-md');
    expect(button).toHaveClass('px-8');
  });

  it('renders with icon size', () => {
    render(<Button size="icon">👍</Button>);
    const button = screen.getByRole('button', { name: '👍' });
    expect(button).toHaveClass('h-10');
    expect(button).toHaveClass('w-10');
  });

  it('renders child when asChild is true', () => {
    render(
      <Button asChild>
        <div>Test</div>
      </Button>
    );
    const button = screen.getByText('Test');
    expect(button).toBeInTheDocument();
  });
});
