import { render, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import List from './List';
import useEvent from '@testing-library/user-event';

describe('List Component', () => {
	it('should render list items', async () => {
		const { getByText } = render(<List initialItems={['Diego', 'Mayk', 'Higor']} />);

		expect(getByText('Diego')).toBeInTheDocument();
		expect(getByText('Mayk')).toBeInTheDocument();
		expect(getByText('Higor')).toBeInTheDocument();
	});

	it('should be able add to new item to the list', () => {
		const { getByText } = render(<List initialItems={[]} />);

		const addButton = getByText('Adicionar');

		useEvent.click(addButton);

		expect(getByText('Novo')).toBeInTheDocument();
	});

	it('should be able add to new item to the list', async () => {
		const { findByText, getByText, getByPlaceholderText } = render(<List initialItems={[]} />);

		const inputElement = getByPlaceholderText('Novo item');

		useEvent.type(inputElement, 'Novo item');

		useEvent.click(getByText('Adicionar novo item'));
		expect(await findByText('Novo item')).toBeInTheDocument();
	});
	// Usando o query para remover o elemento da tela.
	it('should remove one item in list', async () => {
		const { getByText, queryByText, getAllByText } = render(<List initialItems={['Diego']} />);
		const removeButtons = getAllByText('remove');

		useEvent.click(removeButtons[0]);

		await waitFor(() => {
			expect(queryByText('Diego')).not.toBeInTheDocument();
		});
	});
});
