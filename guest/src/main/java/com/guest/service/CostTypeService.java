package com.guest.service;

import com.guest.pojo.po.CostType;
import com.baomidou.mybatisplus.extension.service.IService;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <p>
 *  服务类
 * </p>
 *
 * @author qianye
 * @since 2023-9-17
 */
@Service
public interface CostTypeService extends IService<CostType> {

    List<CostType> getCostTypeByName(String name);

    List<CostType> getAllCostType();

    boolean removeByName(String name);
}
