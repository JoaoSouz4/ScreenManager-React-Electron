import Input from "../../components/input";
import { MdAttachMoney } from "react-icons/md";
import { useContext } from "react";
import { FormEditContext } from "../../context/EditContext";

export function ScreenForm(){
    const {formEditState, actions} = useContext(FormEditContext);

    return (
        <div>
                <div className = 'flex justify-between gap-2'>
                    <Input.Root>
                        <Input.Label content='Paralela'/>
                        <Input.Wrapper>
                            <Input.Content>
                                <Input.Icon icon = {MdAttachMoney}/>
                                <Input.Main
                                    placeholder = '00.00'
                                    value = {formEditState.prices.parallel}
                                    isChange = {(e) => {actions.updatePriceParallel(e.target.value)}}
                                />
                            </Input.Content>
                        </Input.Wrapper>
                    </Input.Root>

                    <Input.Root>
                        <Input.Label content='Intermediária'/>
                        <Input.Wrapper>
                            <Input.Content>
                                <Input.Icon icon = {MdAttachMoney}/>
                                <Input.Main
                                    placeholder = '00.00'
                                    value = {formEditState.prices.medium}
                                    isChange = {(e) => {actions.updatePriceMedium(e.target.value)}}
                                />
                            </Input.Content>
                        </Input.Wrapper>
                    </Input.Root>

                    <Input.Root>
                        <Input.Label content='Primeira linha'/>
                        <Input.Wrapper>
                            <Input.Content>
                                <Input.Icon icon = {MdAttachMoney}/>
                                <Input.Main
                                    placeholder = '00.00'
                                    value = {formEditState.prices.firstLine}
                                    isChange = {(e) => {actions.updatePriceFirstLine(e.target.value)}}
                                />
                            </Input.Content>
                        </Input.Wrapper>
                    </Input.Root>
                </div>
        </div>
    )
}